import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useWeb3React } from "@web3-react/core"

const initialState = {
  isAuthorized: false,
  account: null,
  error: null,
};

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAuthorized, account, error } = action.payload;
    return {
      ...state,
      isAuthorized,
      account,
      error,
    };
  },
  LOGIN: (state, action) => {
    const { account } = action.payload;
    console.log(account);

    return {
      ...state,
      isAuthorized: true,
      account,
    };
  },
  LOGOUT: (state) => ({
    ...state,
    isAuthorized: false,
    account: null,
  }),
};

const reducer = (state, action) => (handlers[action.type] ? handlers[action.type](state, action) : state);

const AuthContext = createContext({
  ...initialState,
  method: "jwt",
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
});

const verifyUser = async (accessToken) => {
  const result = await axios.get(`${process.env.BACKEND_URL}/auth/verifyUser`, {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  });
  return result;
};

function AuthProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const router = useRouter();
    const { deactivate } = useWeb3React();

    useEffect(() => {
      const initialize = async () => {
        try {
          const accessToken = localStorage.getItem("accessToken");
          const account = localStorage.getItem("account");
          const isValid = await verifyUser(accessToken);
          // console.log(accessToken)

          if (accessToken && isValid?.data?.token) {
            dispatch({
              type: "INITIALIZE",
              payload: {
                isAuthorized: true,
                account,
              },
            });
          } else {
            dispatch({
              type: "INITIALIZE",
              payload: {
                isAuthorized: false,
                account: null,
              },
            });
            console.log("push");
            router.push("/connect-wallet");
          }
        } catch (err) {
          dispatch({
            type: "INITIALIZE",
            payload: {
              isAuthorized: false,
              account: null,
              error: { ...err.response.data },
            },
          });
          router.push("/connect-wallet");
        }
      };

      initialize();
    }, []);

    const login = async (signature, account) => {
      const tokenRes = await axios.post(`${process.env.BACKEND_URL}/auth`, {
        publicAddress: account,
        signature,
      });

      localStorage.setItem("accessToken", tokenRes.data.token);
      localStorage.setItem("account", account);

      dispatch({
        type: "LOGIN",
        payload: {
          account,
        },
      });
      router.push("/");
    };

    const logout = async () => {
      deactivate()
      localStorage.removeItem("accessToken");
      localStorage.removeItem("account");
      dispatch({ type: "LOGOUT" });
      router.push("/connect-wallet");
    };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: "jwt",
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider }

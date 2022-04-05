import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    authorization: {
        isAuthorized: false,
        account: ''
    }
};

export const authorization = createSlice({
    name: 'authorization',
    initialState,
    reducers: {
        login: (state) => {
            state.authorization.isAuthorized = true;
        },
        logout: (state) => {
            state.authorization.isAuthorized = false;
            state.authorization.account = '';
        },
        setAccount: (state, action) => {
            console.log("setAccount")
            state.authorization.account = action.payload;
        },
    }
});

export const { login, logout, setAccount } = authorization.actions;

export default authorization.reducer;
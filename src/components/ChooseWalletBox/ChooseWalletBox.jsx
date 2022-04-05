import { useEffect, useState } from "react";
import { open } from "../../redux/slices/errorSnackbarSlice";
import { useDispatch } from "react-redux";
import cn from "classnames";
import Image from "next/image";
//style
import styles from "./ChooseWalletBox.module.css";
//@web3/react
import { useWeb3React } from "@web3-react/core";
//connectors
import { injected, coinbaseWallet, walletConnect } from "../../connectors";
import axios from "axios";
//web3
import Web3 from "web3";
//hook
import useAuth from "../../hooks/useAuth";

let web3;
let provider;

export const ChooseWalletBox = ({ className }) => {
  const dispatch = useDispatch();
  const { activate, library } = useWeb3React();
  const [isSelect, setIsSelect] = useState();
  const { login } = useAuth();

  useEffect(() => {
    library && localStorage.setItem('walletConnected', library.connection.url)
  }, [library])

  const onConnect = async (connector, id) => {
    setIsSelect(true);
    if (id === "1") {
      if (!window.ethereum || !window.ethereum?.isMetaMask) {
        dispatch(open("Please install Metamask Chrome extension"));
        setIsSelect(false);
      } else {
        await activate(connector).catch((err) => {
          setIsSelect(false);
        });
      }
    } else {
      await activate(connector)
        .then(() => dispatch(setIsSelect(false)))
        .catch((err) => {
          setIsSelect(false);
        });
    }
  };

  const connect = async (connector, id) => {
    await onConnect(connector, id);
    provider = await connector.getProvider();
    if (provider) {
      web3 = new Web3(provider);
      signMessage();
    }
  };

  async function signMessage() {
    const accounts = await web3.eth.getAccounts();
    const response = await axios.post(`${process.env.BACKEND_URL}/users/${accounts[0]}`);
    const nonce = response.data.nonce;
    const msg = `I am signing my one-time nonce: ${nonce}`;

    await web3.eth.personal
      .sign(web3.utils.utf8ToHex(msg), accounts[0])
      .then((signature) => {
        handleAuthenticate(signature, accounts[0]);
      })
      .catch((err) => setIsSelect(false));
  }

  const handleAuthenticate = async (signature, address) => {
    await login(signature, address, provider);
  };

  const wallets = [
    {
      id: "1",
      name: "Metamask",
      src: "/metamask-fox-wallet.svg",
      connector: injected,
    },
    {
      id: "2",
      name: "Coinbase",
      src: "/coinbase-wallet.svg",
      connector: coinbaseWallet,
    },
    {
      id: "3",
      name: "WalletConnect",
      src: "/walletconnect-wallet.svg",
      connector: walletConnect,
    },
  ];

  return (
    <div className={className}>
      {wallets.map(({ id, src, name, connector }) => (
        <button
          key={id}
          className={cn(styles.wallet)}
          onClick={() => connect(connector, id)}
          disabled={isSelect}
        >
          <Image src={src} alt={name} height={31} width={31} />
          <p className={styles.walletName}>{name}</p>
          {name === "Metamask" && <p className={styles.popular}>Popular</p>}
        </button>
      ))}
    </div>
  );
};

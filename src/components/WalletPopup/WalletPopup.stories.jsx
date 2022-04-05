import React from "react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { WalletPopup } from "./WalletPopup";

export default {
  title: "WalletPopup",
  component: WalletPopup,
};

const Template = (args) => (
  <Provider store={store}>
    <WalletPopup {...args} />
  </Provider>
);

const wallets = [
  {
    id: "§12§12",
    name: "Metamask",
    src: "/metamask-fox-wallet.svg",
  },
  {
    id: "wqv25b",
    name: "Coinbase",
    src: "/coinbase-wallet.svg",
  },
  {
    id: "34b3b6",
    name: "WalletConnect",
    src: "/walletconnect-wallet.svg",
  },
  {
    id: "ev5w4vu",
    name: "Formatic",
    src: "/formatic-wallet.svg",
  },
];

export const Normal = Template.bind({});
Normal.args = {
  wallets,
  isAuthorised: false,
};

import React from "react";
import { Provider } from "react-redux";
import { MyWalletOptionsPopup } from "./MyWalletOptionsPopup";
import { store } from "../../redux/store";

export default {
  title: "MyWalletOptionsPopup",
  component: MyWalletOptionsPopup,
};

const Template = (args) => (
  <Provider store={store}>
    <MyWalletOptionsPopup {...args} />
  </Provider>
);

export const Normal = Template.bind({});
Normal.args = { walletName: "Metamask", src: "/metamask-fox-wallet.svg" };

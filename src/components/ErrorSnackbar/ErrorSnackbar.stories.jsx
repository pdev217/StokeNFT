import React from "react";
import { Provider, useDispatch } from "react-redux";
import { store } from "../../redux/store";
import { ErrorSnackbar } from "./ErrorSnackbar";

export default {
  title: "ErrorSnackbar",
  component: ErrorSnackbar,
};

const Template = (args) => (
  <Provider store={store}>
    <ErrorSnackbar {...args} />
  </Provider>
);

export const Normal = Template.bind({});
Normal.args = {};

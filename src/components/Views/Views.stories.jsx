import React from "react";
import { Views } from "./Views";

export default {
  title: "Views",
  component: Views,
};

const Template = (args) => <Views {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  quantity: 1234,
  className: "",
};

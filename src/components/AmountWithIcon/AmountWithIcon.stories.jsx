import React from "react";
import { AmountWithIcon } from "./AmountWithIcon";

export default {
  title: "AmountWithIcon",
  component: AmountWithIcon,
};

const Template = (args) => <AmountWithIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  amount: 432.65,
  color: "primary",
  size: "m",
};

export const Red = Template.bind({});
Red.args = {
  amount: 432.65,
  color: "red",
  size: "m",
};

export const Small = Template.bind({});
Small.args = {
  amount: 432.65,
  color: "primary",
  size: "sm",
};

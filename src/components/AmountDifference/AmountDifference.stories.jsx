import React from "react";
import { AmountDifference } from "./AmountDifference";

export default {
  title: "AmountDifference",
  component: AmountDifference,
};

const Template = (args) => <AmountDifference {...args} />;

export const Up = Template.bind({});
Up.args = {
  direction: "up",
  percent: 10,
};

export const Down = Template.bind({});
Down.args = {
  direction: "down",
  percent: 10.05,
};

export const No = Template.bind({});
No.args = {
  direction: "no",
  percent: 0,
};

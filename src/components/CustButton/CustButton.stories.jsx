import React from "react";
import { CustButton } from "./CustButton";

export default {
  title: "CustButton",
  component: CustButton,
};

const Template = (args) => <CustButton {...args} />;

export const Primary = Template.bind({});
Primary.args = { text: "A button", onClick: () => {}, color: "primary" };

export const Red = Template.bind({});
Red.args = { text: "A button", onClick: () => {}, color: "red" };

export const Ghost = Template.bind({});
Ghost.args = { text: "A button", onClick: () => {}, color: "ghost" };

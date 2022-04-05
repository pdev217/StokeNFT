import React from "react";
import { Creator } from "./Creator";

export default {
  title: "Creator",
  component: Creator,
};

const Template = (args) => (
  <div style={{ background: "black" }}>
    <Creator {...args} />
  </div>
);

export const Normal = Template.bind({});
Normal.args = {
  username: "username",
  src: "/some-man.png",
  account: "6t987gouhb75d864iyubpoi",
  isConfirmed: true,
  isBig: true,
};

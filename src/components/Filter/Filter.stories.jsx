import React from "react";
import { store } from "../../redux/store";
import { Filter } from "./Filter";

export default {
  title: "Filter",
  component: Filter,
};

const Template = (args) => (
    <div style={{ background: "var(--black)" }}>
      <Filter {...args} />
    </div>
);

export const Flag = Template.bind({});
Flag.args = {
  src: "/flag-icon.svg",
  text: "United States",
};

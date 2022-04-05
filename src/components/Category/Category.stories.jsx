import React from "react";
import { Category } from "./Category";

export default {
  title: "Category",
  component: Category,
};

const Template = (args) => <Category {...args} />;

export const SimpleCategory = Template.bind({});
SimpleCategory.args = {
  src: "/p.png",
  title: "Music Artists",
};

import React from "react";
import { BigCategoryCard } from "./BigCategoryCard";

export default {
  title: "BigCategoryCard",
  component: BigCategoryCard,
};

const Template = (args) => <BigCategoryCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  src: "/p.png",
  categoryName: "Newly Added",
  title: "The KISS Collection",
};

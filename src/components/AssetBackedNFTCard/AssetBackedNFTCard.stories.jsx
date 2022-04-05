import React from "react";
import { AssetBackedNFTCard } from "./AssetBackedNFTCard";

export default {
  title: "AssetBackedNFTCard",
  component: AssetBackedNFTCard,
};

const Template = (args) => <AssetBackedNFTCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  src: "/testimage.jpg",
  title: "A title",
  text: "lorem ipsum dolor sit amet blablabla lorem ipsum dolor sit amet blablabla lorem ipsum dolor sit amet blablabla ",
  tags: [{ text: "first tag" }, { text: "second tag" }],
};

import React from "react";
import { PopularNFTCard } from "./PopularNFTCard";
// import p from './p.png'
import p from "./PopularNFTCard";

export default {
  title: "PopularNFTCard",
  component: PopularNFTCard,
};

const Template = (args) => <PopularNFTCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  src: "/p.png",
  title: "A titleA titleA titleA titleA titleA titgle",
  price: 310.05,
  priceDifference: {
    direction: "up",
    percent: 15.3,
  },
  username: "CoolMan",
  account: "uv7597gug865d",
  tag: "Art & Theater",
  rewards: "common",
};

export const Down = Template.bind({});
Down.args = {
  src: "/p.png",
  title: "A titleA titleA titleA titleA titleA title",
  price: 310.05,
  priceDifference: {
    direction: "down",
    percent: 15.3,
  },
  username: "CoolMan",
  account: "uv7597gug865d",
  tag: "3d Art",
  rewards: "rare",
};

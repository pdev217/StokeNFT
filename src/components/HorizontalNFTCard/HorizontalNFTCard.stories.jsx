import React from "react";
import { HorizontalNFTCard } from "./HorizontalNFTCard";

export default {
  title: "HorizontalNFTCard",
  component: HorizontalNFTCard,
};

const Template = (args) => <HorizontalNFTCard {...args} />;

export const chartData = new Array(15).fill({}, 0).map(() => {
  return { name: "Page A", price: Math.random() * 100 };
});

export const Normal = Template.bind({});
Normal.args = {
  username: "MLB",
  availible: 247,
  chartData,
  lastUpdate: "24 Hrs",
  price: 147.38,
  priceDifference: {
    difference: 12.43,
    direction: "up",
  },
  tag: "Athletes",
  title: "Maikel Franco",
  src: "/p.png",
  rewards: "rare",
};

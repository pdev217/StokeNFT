import React from "react";
import { SpecialAuctionNFTCard } from "./SpecialAuctionNFTCard";

export default {
  title: "SpecialAuctionNFTCard",
  component: SpecialAuctionNFTCard,
};

const chartData = new Array(15).fill({}, 0).map(() => {
  return { name: "Page A", price: Math.random() * 100 };
});

const Template = (args) => <SpecialAuctionNFTCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  NFTName: " Remnant 003 #376/500",
  time: "01:09:14:53",
  username: "@Sparktanks",
  code: "0xuhv_76rbkln",
  currPrice: 147.38,
  prevPrices: [
    {
      price: 147.38,
      updated: "7.1 Hrs",
    },
    {
      price: 147.38,
      updated: "7.5 Hrs",
    },
    {
      price: 147.38,
      updated: "8.0 Hrs",
    },
  ],
  chartData,
  views: 1562,
  src: "/p.png",
  tag: "Art & Theater",
};

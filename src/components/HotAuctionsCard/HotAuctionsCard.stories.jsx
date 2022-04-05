import React from "react";
import { HotAuctionsCard } from "./HotAuctionsCard";

export default {
  title: "HotAuctionsCard",
  component: HotAuctionsCard,
};

const Template = (args) => <HotAuctionsCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  username: "Spranktanks",
  code: "sd1123123123sd",
  price: 137.37,
  src: "/p.png",
  tag: "Art & Theater",
  time: "12:12:12:45",
  title: "Remnant 003 #376/500",
  views: 1433,
};

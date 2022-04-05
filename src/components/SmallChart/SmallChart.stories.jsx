import React from "react";
import { SmallChart } from "./SmallChart";

export default {
  title: "SmallChart",
  component: SmallChart,
};

const Template = (args) => <SmallChart {...args} />;

export const fakeChartData = new Array(15).fill({}, 0).map(() => {
  return { name: "Page A", price: Math.random() * 100 };
});

export const Chart = Template.bind({});
Chart.args = {
  data,
};

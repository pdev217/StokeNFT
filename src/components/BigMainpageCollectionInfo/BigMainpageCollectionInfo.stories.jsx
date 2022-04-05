import React from "react";
import { BigMainpageCollectionInfo } from "./BigMainpageCollectionInfo";

export default {
  title: "BigMainpageCollectionInfo",
  component: BigMainpageCollectionInfo,
};

const Template = (args) => <BigMainpageCollectionInfo {...args} />;

export const Example = Template.bind({});

Example.args = {
  title: "Rookie Michel Franco Limited Bobblehead!",
  upperCaseText: "only 1,000 minted!",
  discount: 150,
  src: "/p.png,",
};

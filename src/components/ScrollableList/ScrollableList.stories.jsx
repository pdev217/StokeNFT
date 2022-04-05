import { ScrollableList } from "./ScrollableList";

export default {
  title: "ScrollableList",
  component: ScrollableList,
};

const Template = (args) => <ScrollableList {...args} />;

const fakeNFTs = [
  {
    src: "/!!!!fakeImage.png",
    title: "Greta Van Fleet @ Wings Event Center",
    price: 310.05,
    priceDifference: {
      direction: "up",
      percent: 15.3,
    },
    username: "Diamond Hands Ltd.",
    account: "uv7597gug865d",
    tag: "Art & Theater",
    rewards: "common",
    id: "1",
  },
  {
    src: "/!!!!fakeImage.png",
    title: "Greta Van Fleet @ Wings Event Center",
    price: 310.05,
    priceDifference: {
      direction: "up",
      percent: 15.3,
    },
    username: "Diamond Hands Ltd.",
    account: "uv7597gug865d",
    tag: "Art & Theater",
    rewards: "common",
    id: "2",
  },
  {
    src: "/!!!!fakeImage.png",
    title: "Greta Van Fleet @ Wings Event Center",
    price: 310.05,
    priceDifference: {
      direction: "up",
      percent: 15.3,
    },
    username: "Diamond Hands Ltd.",
    account: "uv7597gug865d",
    tag: "Art & Theater",
    rewards: "common",
    id: "3",
  },
  {
    src: "/!!!!fakeImage.png",
    title: "Greta Van Fleet @ Wings Event Center",
    price: 310.05,
    priceDifference: {
      direction: "up",
      percent: 15.3,
    },
    username: "Diamond Hands Ltd.",
    account: "uv7597gug865d",
    tag: "Art & Theater",
    rewards: "common",
    id: "4",
  },
  {
    src: "/!!!!fakeImage.png",
    title: "Greta Van Fleet @ Wings Event Center",
    price: 310.05,
    priceDifference: {
      direction: "up",
      percent: 15.3,
    },
    username: "Diamond Hands Ltd.",
    account: "uv7597gug865d",
    tag: "Art & Theater",
    rewards: "common",
    id: "5",
  },
  {
    src: "/!!!!fakeImage.png",
    title: "Greta Van Fleet @ Wings Event Center",
    price: 310.05,
    priceDifference: {
      direction: "up",
      percent: 15.3,
    },
    username: "Diamond Hands Ltd.",
    account: "uv7597gug865d",
    tag: "Art & Theater",
    rewards: "common",
    id: "6",
  },
  {
    src: "/!!!!fakeImage.png",
    title: "Greta Van Fleet @ Wings Event Center",
    price: 310.05,
    priceDifference: {
      direction: "up",
      percent: 15.3,
    },
    username: "Diamond Hands Ltd.",
    account: "uv7597gug865d",
    tag: "Art & Theater",
    rewards: "common",
    id: "7",
  },
  {
    src: "/!!!!fakeImage.png",
    title: "Greta Van Fleet @ Wings Event Center",
    price: 310.05,
    priceDifference: {
      direction: "up",
      percent: 15.3,
    },
    username: "Diamond Hands Ltd.",
    account: "uv7597gug865d",
    tag: "Art & Theater",
    rewards: "common",
    id: "8",
  },
  {
    src: "/!!!!fakeImage.png",
    title: "Greta Van Fleet @ Wings Event Center",
    price: 310.05,
    priceDifference: {
      direction: "up",
      percent: 15.3,
    },
    username: "Diamond Hands Ltd.",
    account: "uv7597gug865d",
    tag: "Art & Theater",
    rewards: "common",
    id: "9",
  },
  {
    src: "/!!!!fakeImage.png",
    title: "Greta Van Fleet @ Wings Event Center",
    price: 310.05,
    priceDifference: {
      direction: "up",
      percent: 15.3,
    },
    username: "Diamond Hands Ltd.",
    account: "uv7597gug865d",
    tag: "Art & Theater",
    rewards: "common",
    id: "10",
  },
  {
    src: "/!!!!fakeImage.png",
    title: "Greta Van Fleet @ Wings Event Center",
    price: 310.05,
    priceDifference: {
      direction: "up",
      percent: 15.3,
    },
    username: "Diamond Hands Ltd.",
    account: "uv7597gug865d",
    tag: "Art & Theater",
    rewards: "common",
    id: "11",
  },
];

export const Normal = Template.bind({});
Normal.args = {
  items: fakeNFTs,
};

import { v4 } from "uuid";

const categoriesArray = [
  {
    name: "Auctions",
    href: "",
  },
  {
    name: "For Creators",
    href: "",
  },
  {
    name: "Account",
    href: "",
  },
  {
    name: "Quick Links",
    href: "",
  },
  {
    name: "Quick Links",
    href: "",
  },
  {
    name: "Quick Links",
    href: "",
  },
  {
    name: "Quick Links",
    href: "",
  },
  {
    name: "Quick Links",
    href: "",
  },
  {
    name: "Quick Links",
    href: "",
  },
];

export const categories = categoriesArray.map((elem, index) => {
  return {
    ...elem,
    id: index,
  };
});

const iconsArray = [
  { src: "/metamask-fox-wallet.svg", alt: "metamask-icon" },
  { src: "/coinbase-wallet.svg", alt: "coinbase-icon" },
  { src: "/walletconnect-wallet.svg", alt: "walletConnect-icon" },
  { src: "/formatic-wallet.svg", alt: "formatic-icon" },
  { src: "/autherium-wallet.svg", alt: "autherium-icon" },
  { src: "/torus-wallet.svg", alt: "torus-icon" },
];

export const icons = iconsArray.map((elem, index) => {
  return {
    ...elem,
    id: index,
  };
});

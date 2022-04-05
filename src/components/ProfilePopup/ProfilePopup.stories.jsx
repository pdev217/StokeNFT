import React from "react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { ProfilePopup } from "./ProfilePopup";

export default {
  title: "ProfilePopup",
  component: ProfilePopup,
};

const Template = (args) => (
  <Provider store={store}>
    <ProfilePopup {...args} />
  </Provider>
);

const data = [
  {
    categoryName: "Profile",
    href: "#",
    src: "/profile-without-circle.svg",
    id: "1",
  },
  {
    categoryName: "Favourites",
    href: "#",
    src: "/favourites-icon.svg",
    id: "2",
  },
  { categoryName: "Watchlist", href: "#", src: "/eye-icon.svg", id: "3" },
  {
    categoryName: "My collections",
    href: "#",
    src: "/collections-icon.svg",
    id: "4",
  },
  { categoryName: "Settings", href: "#", src: "/settings-icon.svg", id: "5" },
];

export const Normal = Template.bind({});
Normal.args = {
  categories: data,
};

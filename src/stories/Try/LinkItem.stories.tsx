import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LinkItemComponent } from "component/tryComponent/LinkItemComponent";
import { MdAccessibilityNew, MdSearch, MdModeEdit } from "react-icons/md";

export default {
  title: "Try/LinkItem",
  component: LinkItemComponent,
} as ComponentMeta<typeof LinkItemComponent>;

const Template: ComponentStory<typeof LinkItemComponent> = (args) => (
  <LinkItemComponent {...args} />
);

export const Home = Template.bind({});
Home.args = {
  text: "HOME",
  IconElement: <MdAccessibilityNew className="w-full h-full" />,
  onClick: () => {
    console.log("point");
  },
};

export const Search = Template.bind({});
Search.args = {
  text: "SEARCH",
  IconElement: <MdSearch className="w-full h-full" />,
  onClick: () => {
    console.log("point");
  },
};
export const Edit = Template.bind({});
Edit.args = {
  text: "EDIT",
  IconElement: <MdModeEdit className="w-full h-full" />,
  onClick: () => {
    console.log("point");
  },
};

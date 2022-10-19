import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { GrInstagram, GrMail } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";

import { IconContentComponent } from "component/nanpaComponent/IconContentComponent";

export default {
  title: "Nanpa/Component/IconContent",
  component: IconContentComponent,
} as ComponentMeta<typeof IconContentComponent>;

const Template: ComponentStory<typeof IconContentComponent> = (args) => (
  <IconContentComponent {...args} />
);

export const Mail = Template.bind({});
Mail.args = {
  text: "dtrz0711@gmail.com",
  IconContent: <GrMail className="w-full h-full" />,
  onClick: () => {
    console.log("point");
  },
};

export const Instagram = Template.bind({});
Instagram.args = {
  text: "@dtrz0711",
  IconContent: <GrInstagram className="w-full h-full" />,
  onClick: () => {
    console.log("point");
  },
};
export const Facebook = Template.bind({});
Facebook.args = {
  text: "@dtrz0711",
  IconContent: <FaFacebookSquare className="w-full h-full" />,
  onClick: () => {
    console.log("point");
  },
};
export const Twitter = Template.bind({});
Twitter.args = {
  text: "@dtrz0711",
  IconContent: <BsTwitter className="w-full h-full" />,
  onClick: () => {
    console.log("point");
  },
};

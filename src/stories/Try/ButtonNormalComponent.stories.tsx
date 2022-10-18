import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ButtonNormalComponent } from "component/tryComponent/ButtonNormalComponent";

export default {
  title: "Try/ButtonNormalComponent",
  component: ButtonNormalComponent,
  argTypes: {
    size: {
      options: ["l", "m", "s"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof ButtonNormalComponent>;

const Template: ComponentStory<typeof ButtonNormalComponent> = (args) => (
  <ButtonNormalComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: "button",
  onClick: () => {
    console.log("point");
  },
  size: "m",
};

export const Large = Template.bind({});
Large.args = {
  text: "button",
  onClick: () => {
    console.log("point");
  },
  size: "l",
};

export const Medium = Template.bind({});
Medium.args = {
  text: "button",
  onClick: () => {
    console.log("point");
  },
  size: "m",
};

export const Small = Template.bind({});
Small.args = {
  text: "button",
  onClick: () => {
    console.log("point");
  },
  size: "s",
};

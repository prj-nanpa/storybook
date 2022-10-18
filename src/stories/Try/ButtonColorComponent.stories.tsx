import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ButtonColorComponent } from "component/tryComponent/ButtonColorComponent";

export default {
  title: "Try/ButtonColorComponent",
  component: ButtonColorComponent,
  argTypes: {
    color: {
      options: ["green", "red"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof ButtonColorComponent>;

const Template: ComponentStory<typeof ButtonColorComponent> = (args) => (
  <ButtonColorComponent {...args} />
);

export const ButtonGreenColor = Template.bind({});
ButtonGreenColor.args = {
  text: "button",
  onClick: () => {
    console.log("point");
  },
  color: "green",
  disable: false,
};

export const ButtonRedColor = Template.bind({});
ButtonRedColor.args = {
  text: "button",
  onClick: () => {
    console.log("point");
  },
  color: "red",
  disable: false,
};

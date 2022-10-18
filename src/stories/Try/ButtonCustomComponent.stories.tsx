import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ButtonCustomComponent } from "component/tryComponent/ButtonCustomComponent";

import { MdReplay, MdOutlineChangeCircle } from "react-icons/md";

export default {
  title: "Try/ButtonCustomComponent",
  component: ButtonCustomComponent,
} as ComponentMeta<typeof ButtonCustomComponent>;

const Template: ComponentStory<typeof ButtonCustomComponent> = (args) => (
  <ButtonCustomComponent {...args} />
);

export const ButtonCircleIconList = Template.bind({});
ButtonCircleIconList.args = {
  text: "食材リスト",
  onClick: () => {
    console.log("point");
  },
  IconElement: <MdReplay className="w-full h-full" />,
};

export const ButtonCircleIconAmount = Template.bind({});
ButtonCircleIconAmount.args = {
  text: "食材リスト",
  onClick: () => {
    console.log("point");
  },
  IconElement: <MdOutlineChangeCircle className="w-full h-full" />,
};

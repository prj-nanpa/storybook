import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ButtonCreateFloatComponent } from "component/nanpaComponent/ButtonCreateFloatComponent";

export default {
  title: "Nanpa/Button",
  component: ButtonCreateFloatComponent,
} as ComponentMeta<typeof ButtonCreateFloatComponent>;

const Template: ComponentStory<typeof ButtonCreateFloatComponent> = (args) => (
  <ButtonCreateFloatComponent {...args} />
);

export const FloatEdit = Template.bind({});
FloatEdit.args = {
  onClick: () => {
    console.log("point");
  },
};

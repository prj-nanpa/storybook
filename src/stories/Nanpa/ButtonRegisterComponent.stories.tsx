import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ButtonRegisterComponent } from "component/nanpaComponent/ButtonRegisterComponent";

export default {
  title: "Nanpa/Component/Button",
  component: ButtonRegisterComponent,
  argTypes: {
    color: {
      options: ["blue", "red", "green"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof ButtonRegisterComponent>;

const Template: ComponentStory<typeof ButtonRegisterComponent> = (args) => (
  <ButtonRegisterComponent {...args} />
);

export const CreateRegister = Template.bind({});
CreateRegister.args = {
  text: "参加登録",
  color: "blue",
  onClick: () => {
    console.log("point");
  },
};

export const CreateUnRegister = Template.bind({});
CreateUnRegister.args = {
  text: "参加登録解除",
  color: "red",
  onClick: () => {
    console.log("point");
  },
};

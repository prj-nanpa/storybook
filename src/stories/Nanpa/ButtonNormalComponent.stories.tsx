import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ButtonNormalComponent } from "component/nanpaComponent/ButtonNormalComponent";

export default {
  title: "Nanpa/Component/Button",
  component: ButtonNormalComponent,
} as ComponentMeta<typeof ButtonNormalComponent>;

const Template: ComponentStory<typeof ButtonNormalComponent> = (args) => (
  <ButtonNormalComponent {...args} />
);

export const SendButton = Template.bind({});
SendButton.args = {
  text: "送信",
  onClick: () => {
    console.log("point");
  },
};

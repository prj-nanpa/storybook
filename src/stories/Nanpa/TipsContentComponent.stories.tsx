import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TipsContentComponent } from "component/nanpaComponent/TipsContentComponent";

export default {
  title: "Nanpa/Tips",
  component: TipsContentComponent,
  argTypes: {
    color: {
      options: ["red", "blue", "normal"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof TipsContentComponent>;

const Template: ComponentStory<typeof TipsContentComponent> = (args) => (
  <TipsContentComponent {...args} />
);

export const Tips = Template.bind({});
Tips.args = {
  text: "Layout",
  color: "red",
  onClick: () => {
    console.log("point");
  },
};

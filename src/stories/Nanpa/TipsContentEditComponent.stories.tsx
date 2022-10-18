import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TipsContentEditComponent } from "component/nanpaComponent/TipsContentEditComponent";

export default {
  title: "Nanpa/Tips",
  component: TipsContentEditComponent,
  argTypes: {
    color: {
      options: ["red", "blue", "normal"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof TipsContentEditComponent>;

const Template: ComponentStory<typeof TipsContentEditComponent> = (args) => (
  <TipsContentEditComponent {...args} />
);

export const TipsEdit = Template.bind({});
TipsEdit.args = {
  text: "Layout",
  color: "red",
  onClick: () => {
    console.log("point");
  },
};

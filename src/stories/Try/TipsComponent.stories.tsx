import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TipsComponent } from "component/tryComponent/TipsComponent";

export default {
  title: "Try/Tips",
  component: TipsComponent,
} as ComponentMeta<typeof TipsComponent>;

const Template: ComponentStory<typeof TipsComponent> = (args) => (
  <TipsComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: "Layout",
  onClick: () => {
    console.log("point");
  },
};

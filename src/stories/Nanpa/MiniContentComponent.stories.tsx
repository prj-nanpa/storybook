import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MiniContentComponent } from "component/nanpaComponent/MiniContentComponent";

export default {
  title: "Nanpa/Mini",
  component: MiniContentComponent,
} as ComponentMeta<typeof MiniContentComponent>;

const Template: ComponentStory<typeof MiniContentComponent> = (args) => (
  <MiniContentComponent {...args} />
);

export const Content = Template.bind({});
Content.args = {
  text: "デスクトップタイトル",
};

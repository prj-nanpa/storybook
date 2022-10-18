import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MiniTitleComponent } from "component/nanpaComponent/MiniTitleComponent";

export default {
  title: "Nanpa/Mini",
  component: MiniTitleComponent,
} as ComponentMeta<typeof MiniTitleComponent>;

const Template: ComponentStory<typeof MiniTitleComponent> = (args) => (
  <MiniTitleComponent {...args} />
);

export const Title = Template.bind({});
Title.args = {
  text: "デスクトップタイトル",
};

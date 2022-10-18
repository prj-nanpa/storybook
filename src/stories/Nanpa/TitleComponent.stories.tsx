import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TitleComponent } from "component/nanpaComponent/TitleComponent";

export default {
  title: "Nanpa/Title",
  component: TitleComponent,
} as ComponentMeta<typeof TitleComponent>;

const Template: ComponentStory<typeof TitleComponent> = (args) => (
  <TitleComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: "デスクトップタイトル",
};

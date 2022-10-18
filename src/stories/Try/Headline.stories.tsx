import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TopHeadlineComponent } from "component/tryComponent/TopHeadlineComponent";

export default {
  title: "Try/Headline",
  component: TopHeadlineComponent,
} as ComponentMeta<typeof TopHeadlineComponent>;

const Template: ComponentStory<typeof TopHeadlineComponent> = (args) => (
  <TopHeadlineComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: "デスクトップタイトル",
};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CardContentComponent } from "component/tryComponent/CardContentComponent";

export default {
  title: "Try/CardComponent",
  component: CardContentComponent,
} as ComponentMeta<typeof CardContentComponent>;

const Template: ComponentStory<typeof CardContentComponent> = (args) => (
  <CardContentComponent {...args} />
);

export const CardContent = Template.bind({});
CardContent.args = {
  title: "デスクトップタイトル",
  imageLink: "https://placehold.jp/150x150.png",
  onClick: () => {
    console.log("point");
  },
  week: 0,
};

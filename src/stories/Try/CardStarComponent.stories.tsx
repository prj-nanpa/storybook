import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CardStarComponent } from "component/tryComponent/CardStarComponent";

export default {
  title: "Try/CardComponent",
  component: CardStarComponent,
} as ComponentMeta<typeof CardStarComponent>;

const Template: ComponentStory<typeof CardStarComponent> = (args) => (
  <CardStarComponent {...args} />
);

export const CardOnStar = Template.bind({});
CardOnStar.args = {
  title: "デスクトップタイトル",
  imageLink: "https://placehold.jp/150x150.png",
  star: true,
  onClick: () => {
    console.log("point");
  },
  onClickStar: () => {
    console.log("click star");
  },
};

export const CardOffStar = Template.bind({});
CardOffStar.args = {
  title: "デスクトップタイトル",
  imageLink: "https://placehold.jp/150x150.png",
  star: false,
  onClick: () => {
    console.log("point");
  },
  onClickStar: () => {
    console.log("click star");
  },
};

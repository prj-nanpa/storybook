import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CardJunleComponent } from "component/nanpaComponent/CardJunleComponent";

export default {
  title: "Nanpa/Component/CardComponent",
  component: CardJunleComponent,
} as ComponentMeta<typeof CardJunleComponent>;

const Template: ComponentStory<typeof CardJunleComponent> = (args) => (
  <CardJunleComponent {...args} />
);

export const CardJunle = Template.bind({});
CardJunle.args = {
  title: "デスクトップタイトル",
  imageLink: "https://placehold.jp/150x150.png",
  onClick: () => {
    console.log("point");
  },
};

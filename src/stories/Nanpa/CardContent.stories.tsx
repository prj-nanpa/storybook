import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CardContentComponent } from "component/nanpaComponent/CardContentComponent";

export default {
  title: "Nanpa/Component/CardComponent",
  component: CardContentComponent,
} as ComponentMeta<typeof CardContentComponent>;

const Template: ComponentStory<typeof CardContentComponent> = (args) => (
  <CardContentComponent {...args} />
);

export const CardContent = Template.bind({});
CardContent.args = {
  title: "タイトルタイトル",
  imageLink: "https://placehold.jp/150x150.png",
  deadline: "3",
  ownerIcon: "https://placehold.jp/150x150.png",
  ownerName: "龍ちゃん",
  place: "池袋",
  day: "7/15",
  price: "1000",
  participationMax: "9",
  participationNow: "22",
  onClick: () => {
    console.log("point");
  },
};

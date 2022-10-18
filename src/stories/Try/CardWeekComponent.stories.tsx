import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CardWeekComponent } from "component/tryComponent/CardWeekComponent";

export default {
  title: "Try/CardComponent",
  component: CardWeekComponent,
  argTypes: {
    week: {
      control: {
        type: "select",
        options: [0, 1, 2, 3, 4, 5, 6],
        labels: {
          0: "日",
          1: "月",
          2: "火",
          3: "水",
          4: "木",
          5: "金",
          6: "土",
        },
      },
    },
  },
} as ComponentMeta<typeof CardWeekComponent>;

const Template: ComponentStory<typeof CardWeekComponent> = (args) => (
  <CardWeekComponent {...args} />
);

export const CardWeek = Template.bind({});
CardWeek.args = {
  title: "デスクトップタイトル",
  imageLink: "https://placehold.jp/150x150.png",
  onClick: () => {
    console.log("point");
  },
  week: 0,
};

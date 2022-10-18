import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CardNoContentComponent } from "component/tryComponent/CardNoContentComponent";

export default {
  title: "Try/CardComponent",
  component: CardNoContentComponent,
} as ComponentMeta<typeof CardNoContentComponent>;

const Template: ComponentStory<typeof CardNoContentComponent> = (args) => (
  <CardNoContentComponent {...args} />
);

export const CardNoContent = Template.bind({});
CardNoContent.args = {
  onClick: () => {
    console.log("point");
  },
};

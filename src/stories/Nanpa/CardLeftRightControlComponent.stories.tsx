import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CardLeftRightControlComponent } from "component/nanpaComponent/CardLeftRightControlComponent";

export default {
  title: "Nanpa/Component/CardLeftRightControlComponent",
  component: CardLeftRightControlComponent,
} as ComponentMeta<typeof CardLeftRightControlComponent>;

const Template: ComponentStory<typeof CardLeftRightControlComponent> = (
  args
) => <CardLeftRightControlComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClickLeft: () => {
    console.log("point");
  },
  onClickRight: () => {
    console.log("point");
  },
  allPageNumber: 1,
  nowPageNumber: 2,
};

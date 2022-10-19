import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ButtonMoreComponent } from "component/nanpaComponent/ButtonMoreComponent";

export default {
  title: "Nanpa/Component/Button",
  component: ButtonMoreComponent,
} as ComponentMeta<typeof ButtonMoreComponent>;

const Template: ComponentStory<typeof ButtonMoreComponent> = (args) => (
  <ButtonMoreComponent {...args} />
);

export const MoreButton = Template.bind({});
MoreButton.args = {
  onClick: () => {
    console.log("point");
  },
};

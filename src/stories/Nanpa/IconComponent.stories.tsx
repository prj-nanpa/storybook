import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { IconComponent } from "component/nanpaComponent/IconComponent";

export default {
  title: "Nanpa/Component/Icon",
  component: IconComponent,
} as ComponentMeta<typeof IconComponent>;

const Template: ComponentStory<typeof IconComponent> = (args) => (
  <IconComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  img: "https://placehold.jp/150x150.png",
  onClick: () => {
    console.log("point");
  },
};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { NaviComponent } from "component/tryOrganisms/NaviComponent";
export default {
  title: "Try/Navi",
  component: NaviComponent,
} as ComponentMeta<typeof NaviComponent>;

const Template: ComponentStory<typeof NaviComponent> = (args) => (
  <NaviComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Layout",
};

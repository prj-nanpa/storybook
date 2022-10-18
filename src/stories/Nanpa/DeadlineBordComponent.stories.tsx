import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DeadlineBordComponent } from "component/nanpaComponent/DeadlineBordComponent";

export default {
  title: "Nanpa/Deadline",
  component: DeadlineBordComponent,
} as ComponentMeta<typeof DeadlineBordComponent>;

const Template: ComponentStory<typeof DeadlineBordComponent> = (args) => (
  <DeadlineBordComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: "06/12",
};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { GrMail } from "react-icons/gr";

import { IconContentEditComponent } from "component/nanpaComponent/IconContentEditComponent";

export default {
  title: "Nanpa/IconContent",
  component: IconContentEditComponent,
} as ComponentMeta<typeof IconContentEditComponent>;

const Template: ComponentStory<typeof IconContentEditComponent> = (args) => (
  <IconContentEditComponent {...args} />
);

export const IconContentEdit = Template.bind({});
IconContentEdit.args = {
  text: "dtrz0711@gmail.com",
  IconContent: <GrMail className="w-full h-full" />,
  onClick: () => {
    console.log("point");
  },
};

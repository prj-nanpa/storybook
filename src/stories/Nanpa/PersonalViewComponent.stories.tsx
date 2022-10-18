import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PersonalViewComponent } from "component/nanpaOrganize/PersonalViewComponent";

export default {
  title: "Nanpa/Personal",
  component: PersonalViewComponent,
} as ComponentMeta<typeof PersonalViewComponent>;

const Template: ComponentStory<typeof PersonalViewComponent> = (args) => (
  <PersonalViewComponent {...args} />
);

export const PersonalView = Template.bind({});
PersonalView.args = {
  personalLink: "https://placehold.jp/150x150.png",
};

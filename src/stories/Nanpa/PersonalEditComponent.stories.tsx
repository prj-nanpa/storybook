import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PersonalEditComponent } from "component/nanpaOrganize/PersonalEditComponent";
export default {
  title: "Nanpa/Personal",
  component: PersonalEditComponent,
} as ComponentMeta<typeof PersonalEditComponent>;

const Template: ComponentStory<typeof PersonalEditComponent> = (args) => (
  <PersonalEditComponent {...args} />
);

export const PersonalEdit = Template.bind({});
PersonalEdit.args = {
  personalLink: "https://placehold.jp/150x150.png",
};

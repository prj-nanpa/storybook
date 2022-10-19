import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SearchFormComponent } from "component/nanpaOrganize/SearchFormComponent";

export default {
  title: "Nanpa/Organize/SearchForm",
  component: SearchFormComponent,
} as ComponentMeta<typeof SearchFormComponent>;

const Template: ComponentStory<typeof SearchFormComponent> = (args) => (
  <SearchFormComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: "https://placehold.jp/150x150.png",
};

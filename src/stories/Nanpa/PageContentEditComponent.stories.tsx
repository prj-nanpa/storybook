import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PageContentEditComponent } from "component/nanpaOrganize/PageContentEditComponent";
export default {
  title: "Nanpa/Page",
  component: PageContentEditComponent,
} as ComponentMeta<typeof PageContentEditComponent>;

const Template: ComponentStory<typeof PageContentEditComponent> = (args) => (
  <PageContentEditComponent {...args} />
);

export const PageContentEdit = Template.bind({});
PageContentEdit.args = {
  text: "https://placehold.jp/150x150.png",
};

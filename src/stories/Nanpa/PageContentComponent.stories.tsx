import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PageContentComponent } from "component/nanpaOrganize/PageContentComponent";
export default {
  title: "Nanpa/Page",
  component: PageContentComponent,
} as ComponentMeta<typeof PageContentComponent>;

const Template: ComponentStory<typeof PageContentComponent> = (args) => (
  <PageContentComponent {...args} />
);

export const PageContent = Template.bind({});
PageContent.args = {
  text: "https://placehold.jp/150x150.png",
};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SearchLinkComponent } from "component/nanpaComponent/SearchLinkComponent";

export default {
  title: "Nanpa/Component/SearchLink",
  component: SearchLinkComponent,
} as ComponentMeta<typeof SearchLinkComponent>;

const Template: ComponentStory<typeof SearchLinkComponent> = (args) => (
  <SearchLinkComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  onClick: () => {
    console.log("point");
  },
};

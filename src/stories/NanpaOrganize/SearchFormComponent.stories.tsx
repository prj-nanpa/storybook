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
  onClick: () => {
    console.log("point");
  },
  tagList: [
    {
      tagColor: "red",
      tagId: 0,
      tagValue: "red",
    },
    {
      tagColor: "blue",
      tagId: 1,
      tagValue: "blue",
    },
    {
      tagColor: "green",
      tagId: 2,
      tagValue: "green",
    },
    {
      tagColor: "gray",
      tagId: 3,
      tagValue: "gary",
    },
  ],
};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CommentComponent } from "component/nanpaOrganize/CommentComponent";
export default {
  title: "Nanpa/Organize/Page",
  component: CommentComponent,
} as ComponentMeta<typeof CommentComponent>;

const Template: ComponentStory<typeof CommentComponent> = (args) => (
  <CommentComponent {...args} />
);

export const Comment = Template.bind({});
Comment.args = {
  text: "https://placehold.jp/150x150.png",
};

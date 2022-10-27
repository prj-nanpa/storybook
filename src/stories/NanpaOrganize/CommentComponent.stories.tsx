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
  commentDataList: [
    {
      userId: "xxxx",
      userIcon:
        "https://placehold.jp/30/dd6699/ffffff/150x150.png?text=placeholder+image",
      commentDate: "2021-12-21",
      commentText: "comment",
    },
    {
      userId: "xxxx",
      userIcon:
        "https://placehold.jp/30/dd6699/ffffff/150x150.png?text=placeholder+image",
      commentDate: "2021-12-21",
      commentText: "comment",
    },
    {
      userId: "xxxx",
      userIcon:
        "https://placehold.jp/30/dd6699/ffffff/150x150.png?text=placeholder+image",
      commentDate: "2021-12-21",
      commentText: "comment",
    },
    {
      userId: "xxxx",
      userIcon:
        "https://placehold.jp/30/dd6699/ffffff/150x150.png?text=placeholder+image",
      commentDate: "2021-12-21",
      commentText: "comment",
    },
    {
      userId: "xxxx",
      userIcon:
        "https://placehold.jp/30/dd6699/ffffff/150x150.png?text=placeholder+image",
      commentDate: "2021-12-21",
      commentText: "comment",
    },
  ],
};

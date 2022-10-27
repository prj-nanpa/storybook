import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PersonalViewComponent } from "component/nanpaOrganize/PersonalViewComponent";

export default {
  title: "Nanpa/Organize/Personal",
  component: PersonalViewComponent,
} as ComponentMeta<typeof PersonalViewComponent>;

const Template: ComponentStory<typeof PersonalViewComponent> = (args) => (
  <PersonalViewComponent {...args} />
);

export const PersonalView = Template.bind({});
PersonalView.args = {
  userId: "xxxxxxx",
  userEmail: "dtrz0711@gmail",
  userName: "田中龍之介",
  userNickname: "龍ちゃん",
  userIcon: "https://placehold.jp/3697c7/ffffff/150x150.png?text=user",
  userCoe: "エンジニア・クリエイター",
  userSl: "PS",
  userComment: "よろしくお願いします",
  userTags: [],
  userLineQr: "https://placehold.jp/3697c7/ffffff/150x150.png?text=QR",
  userTwitterId: "@dtrz0711",
  userInstagramId: "@dtrz0711",
  userFacebookId: "@dtrz0711",
  hostEvent: [],
  joinEvent: [],
  pastEvent: [],
  userTagsId: [0, 1],
};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PersonalEditComponent } from "component/nanpaOrganize/PersonalEditComponent";
export default {
  title: "Nanpa/Organize/Personal",
  component: PersonalEditComponent,
} as ComponentMeta<typeof PersonalEditComponent>;

const Template: ComponentStory<typeof PersonalEditComponent> = (args) => (
  <PersonalEditComponent {...args} />
);

export const PersonalEdit = Template.bind({});
PersonalEdit.args = {
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

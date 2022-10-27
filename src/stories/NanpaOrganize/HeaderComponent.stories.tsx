import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { HeaderComponent } from "component/nanpaOrganize/HeaderComponent";
export default {
  title: "Nanpa/Organize/Header",
  component: HeaderComponent,
} as ComponentMeta<typeof HeaderComponent>;

const Template: ComponentStory<typeof HeaderComponent> = (args) => (
  <HeaderComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  logo: "https://placehold.jp/30/dd6699/ffffff/300x150.png?text=image",
  logoClick: () => {
    console.log("point");
  },
  btnClick: () => {
    console.log("point");
  },
};

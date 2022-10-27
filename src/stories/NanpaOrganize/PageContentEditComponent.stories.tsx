import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PageContentEditComponent } from "component/nanpaOrganize/PageContentEditComponent";
export default {
  title: "Nanpa/Organize/Page",
  component: PageContentEditComponent,
} as ComponentMeta<typeof PageContentEditComponent>;

const Template: ComponentStory<typeof PageContentEditComponent> = (args) => (
  <PageContentEditComponent {...args} />
);

export const PageContentEdit = Template.bind({});
PageContentEdit.args = {
  eventBudget: 100,
  eventCreatedDate: "",
  eventDate: "",
  eventDeadline: "",
  eventGuestLength: 0,
  eventGuests: [],
  eventId: 0,
  eventImage: "",
  eventLeftDate: 0,
  eventMaxGuest: "",
  eventMinGuest: "",
  eventName: "",
  eventNote: "",
  eventOwner: {
    userEmail: "**",
    userIcon: "",
    userId: "**",
    userName: "",
    userNickname: "",
  },
  eventPlace: "",
  eventTags: [],
  eventTagsId: [],
  userId: "",
};

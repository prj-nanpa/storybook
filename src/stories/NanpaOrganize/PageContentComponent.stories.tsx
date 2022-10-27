import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PageContentComponent } from "component/nanpaOrganize/PageContentComponent";
export default {
  title: "Nanpa/Organize/Page",
  component: PageContentComponent,
} as ComponentMeta<typeof PageContentComponent>;

const Template: ComponentStory<typeof PageContentComponent> = (args) => (
  <PageContentComponent {...args} />
);

export const PageContent = Template.bind({});
PageContent.args = {
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

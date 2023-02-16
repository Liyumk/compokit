import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SectionMessage } from "./SectionMessage";
import { Button } from "../Button";

export default {
    title: "Components/SectionMessage",
    component: SectionMessage,
} as ComponentMeta<typeof SectionMessage>;

const Template: ComponentStory<typeof SectionMessage> = (args) => (
    <SectionMessage {...args} />
);

export const DefaultProgressIndicator = Template.bind({});
DefaultProgressIndicator.storyName = "Default";
DefaultProgressIndicator.args = {
    title: "Lorem isp poerlap",
    children: [<div>hey there how is everything btw</div>],
    actions: [<Button>Action 1</Button>],
};

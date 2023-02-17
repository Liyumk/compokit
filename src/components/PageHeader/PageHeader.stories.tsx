import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PageHeader } from "./PageHeader";

export default {
    title: "Components/Page header",
    component: PageHeader,
} as ComponentMeta<typeof PageHeader>;

const Template: ComponentStory<typeof PageHeader> = (args) => (
    <PageHeader {...args} />
);

export const DefaultProgressIndicator = Template.bind({});
DefaultProgressIndicator.storyName = "Default";
DefaultProgressIndicator.args = {
    children: "Lorem ipsum test title",
};

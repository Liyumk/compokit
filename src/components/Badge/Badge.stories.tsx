import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Badge } from "./Badge";

export default {
    title: "Components/Badge",
    component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const DefaultProgressIndicator = Template.bind({});
DefaultProgressIndicator.storyName = "Default";
DefaultProgressIndicator.args = {
    appearance: "removed",
    children: ["23"],
    max: 34,
};

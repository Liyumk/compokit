import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ProgressBar } from "./ProgressBar";

export default {
    title: "Components/ProgressBar",
    component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => (
    <ProgressBar {...args} />
);

export const DefaultProgressIndicator = Template.bind({});
DefaultProgressIndicator.storyName = "Default";
DefaultProgressIndicator.args = {};

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import ProgressBar, { ProgressBarProps } from "./ProgressBar";

export default {
    title: "ProgressBar",
    component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => (
    <ProgressBar {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
    value: 20,
};

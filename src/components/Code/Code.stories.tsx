import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Code from "./Code";

export default {
    title: "Code",
    component: Code,
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: ["Hey there this is code"],
};

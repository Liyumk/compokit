import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Lozenge } from "./Lozenge";

export default {
    title: "Components/Lozenge",
    component: Lozenge,
} as ComponentMeta<typeof Lozenge>;

const Template: ComponentStory<typeof Lozenge> = (args) => (
    <Lozenge {...args} />
);

export const DefaultProgressIndicator = Template.bind({});
DefaultProgressIndicator.storyName = "Default";
DefaultProgressIndicator.args = { children: <>lozenge</> };

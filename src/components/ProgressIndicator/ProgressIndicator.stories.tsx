import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ProgressIndicator, ProgressIndicatorProps } from "./ProgressIndicator";

export default {
    title: "Components/ProgressIndicator",
    component: ProgressIndicator,
} as ComponentMeta<typeof ProgressIndicator>;

const Template: ComponentStory<typeof ProgressIndicator> = (args) => (
    <ProgressIndicator {...args} />
);

export const DefaultProgressIndicator = Template.bind({});
DefaultProgressIndicator.storyName = "Default";
DefaultProgressIndicator.args = {
    values: ["one", "two", "three", "four"],
    selectedIndex: 1,
    onSelect: () => {
        console.log("Change the selected index state here");
    },
};

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Image } from "./Image";

export default {
    title: "Components/Image",
    component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const DefaultProgressIndicator = Template.bind({});
DefaultProgressIndicator.storyName = "Default";
DefaultProgressIndicator.args = {
    src: "https://picsum.photos/200",
    // isDark: true,
    // srcDark: "https://picsum.photos/200/300",
};

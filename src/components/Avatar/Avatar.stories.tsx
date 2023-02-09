import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Avatar, { AvatarProps } from "./Avatar";

export default {
    title: "Avatar",
    component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    src: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2095&q=80",
    size: "large",
    appearance: "circle",
};

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Banner } from "./Banner";

export default {
    title: "Components/Banner",
    component: Banner,
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;

export const DefaultProgressIndicator = Template.bind({});
DefaultProgressIndicator.storyName = "Default";
DefaultProgressIndicator.args = {
    children: (
        <div>
            hey there how are you Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Eaque delectus voluptatum perspiciatis rerum ab
            provident numquam, hic sed qui voluptate similique, odio quibusdam
            sint, saepe dolorem modi vitae. Ut, perferendis!
        </div>
    ),
};

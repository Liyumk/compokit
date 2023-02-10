import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import SectionMessage, { SectionMessageProps } from "./SectionMessage";
import SectionTitle from "./SectionTitle/SectionTitle";
import SectionFooter from "./SectionFooter/SectionFooter";

export default {
    title: "Section Message",
    component: SectionMessage,
} as ComponentMeta<typeof SectionMessage>;

const Template: ComponentStory<typeof SectionMessage> = (args) => (
    <SectionMessage {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
    children: [
        <SectionTitle title="Test title"></SectionTitle>,
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet rem
            pariatur est, illo magni in totam libero facilis sint nam
            perferendis molestiae. Laborum, nihil illum eum placeat aliquid
            consequatur amet!
        </p>,
        <SectionFooter>
            <p>action one</p>
            <p>action two</p>
        </SectionFooter>,
    ],
};

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import ModalDialog, { ModalDialogProps } from "./ModalDialog";
import ModalHeader from "./ModalHeader/ModalHeader";
import ModalBody from "./ModalBody/ModalBody";
import ModalFooter from "./ModalFooter/ModalFooter";

export default {
    title: "Modal Dialog",
    component: ModalDialog,
} as ComponentMeta<typeof ModalDialog>;

const Template: ComponentStory<typeof ModalDialog> = (args) => (
    <ModalDialog {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
    children: [
        <ModalHeader title="Shalom" />,
        <ModalBody>
            Hey there this is body hey I need to test this and I am writing
            random words so that I can see how it would look likeNam a augue nec
            ante molestie tristique maximus nec enim. Suspendisse potenti. Donec
            lectus tellus, porta in pellentesque dictum, pulvinar eget orci.
            Nullam id lectus aliquam, pretium dui ullamcorper, maximus felis.
            Nulla nunc arcu, dictum eget semper non, luctus vel nulla. Praesent
            sed dolor in quam euismod ullamcorper vitae sit amet enim. Duis
            molestie iaculis velit, at facilisis dolor pretium in. Etiam
            ullamcorper turpis sed interdum suscipit. Donec nec elementum massa.
            Curabitur id velit vitae magna rutrum vehicula. Mauris lobortis
            egestas ligula dictum ultricies. Ut a dui vel purus eleifend varius.
            Aenean a massa in erat egestas auctor. Sed diam dui, efficitur quis
            dui nec, dapibus lobortis libero. Phasellus elementum metus ut augue
            pulvinar, in dapibus velit iaculis. Nullam ac scelerisque erat.
        </ModalBody>,
        <ModalFooter>
            <button>hey </button>
            <button>where are </button>
        </ModalFooter>,
    ],

    width: 30,
};

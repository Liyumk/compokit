import React, { ReactNode } from "react";
import { Footer } from "./ModalFooter.styled";

export interface ModalFooterProps {
    children: ReactNode;
}

const ModalFooter = (props: ModalFooterProps) => {
    const { children } = props;
    return <Footer>{children}</Footer>;
};

export default ModalFooter;

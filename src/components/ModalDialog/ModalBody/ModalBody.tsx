import React, { ReactNode } from "react";
import { BodyText } from "./ModalBody.styled";

export interface ModalBodyProps {
    children: ReactNode;
}

const ModalBody = (props: ModalBodyProps) => {
    const { children } = props;
    return <BodyText>{children}</BodyText>;
};

export default ModalBody;

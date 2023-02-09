import React, { ReactNode } from "react";
import { Header } from "./ModalHeader.styled";

export interface ModalHeaderProps {
    children?: ReactNode;
    title: string;
}

const ModalHeader = (props: ModalHeaderProps) => {
    const { children, title } = props;
    return <Header>{title}</Header>;
};

export default ModalHeader;

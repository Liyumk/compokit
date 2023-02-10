import React, { ReactNode } from "react";
import { SectionFooterWrapper } from "./SectionFooter.styled";

export interface SectionFooterProps {
    children: ReactNode;
}

const SectionFooter = (props: SectionFooterProps) => {
    const { children } = props;
    return <SectionFooterWrapper>{children}</SectionFooterWrapper>;
};

export default SectionFooter;

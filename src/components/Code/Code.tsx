import React, { ReactNode } from "react";
import { CodeWrapper } from "./Code.styled";

export interface CodeProps {
    children: ReactNode;
}

const Code = (props: CodeProps) => {
    const { children } = props;
    return <CodeWrapper>{children}</CodeWrapper>;
};

export default Code;

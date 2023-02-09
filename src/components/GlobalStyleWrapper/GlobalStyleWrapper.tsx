import React, { Children, ReactNode } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { GlobalStyles } from "../../../globalstyles";

export interface GlobalStyleWrapperProps {
    children: ReactNode;
}

const GlobalStyleWrapper = (props: GlobalStyleWrapperProps) => {
    const { children } = props;
    return (
        <>
            <GlobalStyles />
            {children}
        </>
    );
};

export default GlobalStyleWrapper;

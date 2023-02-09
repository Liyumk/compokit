import React, { ReactNode } from "react";
import { GlobalStyles } from "../../globalstyles";

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

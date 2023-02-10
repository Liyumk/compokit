import React, { ReactNode } from "react";
import { GlobalStyles } from "../../common/styles/globalstyles";

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

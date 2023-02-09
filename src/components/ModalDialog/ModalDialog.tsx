import React, { ReactNode } from "react";
import { ModalWrapper, MainWrapperStyle } from "./ModalDialog.styled";
import { createContext } from "react";
import GlobalStyleWrapper from "../GlobalStyleWrapper/GlobalStyleWrapper";

export interface ModalDialogProps {
    children: ReactNode;
    height?: number | string;
    width?: number | string;
    // onClose: () => void;
}

const ModalDialogContext = createContext({});

const ModalDialog = (props: ModalDialogProps) => {
    const { children, height, width } = props;

    return (
        <GlobalStyleWrapper>
            <div style={MainWrapperStyle}>
                <ModalWrapper height={height} width={width}>
                    {children}
                </ModalWrapper>
            </div>
        </GlobalStyleWrapper>
    );
};

export default ModalDialog;

import React, { ReactNode } from "react";
import { ModalWrapper, MainWrapperStyle } from "./ModalDialog.styled";
import { createContext } from "react";
import GlobalStyleWrapper from "../GlobalStyleWrapper/GlobalStyleWrapper";
import ModalWidthConverter from "../../utils/ModalWidthConverter";

export interface ModalDialogProps {
    children: ReactNode;
    height?: number | string;
    width?: string | number | null;
    // onClose: () => void;
}

const ModalDialogContext = createContext({});

const ModalDialog = (props: ModalDialogProps) => {
    let { children, height, width } = props;

    const checkType = () => {
        return typeof width === "string"
            ? ModalWidthConverter(width)
            : typeof width === "number"
            ? width
            : null;
    };

    return (
        <GlobalStyleWrapper>
            <div style={MainWrapperStyle}>
                <ModalWrapper height={height} width={checkType()}>
                    {children}
                </ModalWrapper>
            </div>
        </GlobalStyleWrapper>
    );
};

export default ModalDialog;

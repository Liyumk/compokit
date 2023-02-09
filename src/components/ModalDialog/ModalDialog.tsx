import React, { ReactNode } from "react";
import { ModalWrapper, MainWrapperStyle } from "./ModalDialog.styled";
import GlobalStyleWrapper from "../GlobalStyleWrapper/GlobalStyleWrapper";
import { modalWidthConverter } from "../../utils/modalWidthConverter";

export interface ModalDialogProps {
    children: ReactNode;
    height?: number | string;
    width?: string | number | null;
}

const ModalDialog = (props: ModalDialogProps) => {
    let { children, height, width } = props;

    const checkType = () => {
        return typeof width === "string"
            ? modalWidthConverter(width)
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

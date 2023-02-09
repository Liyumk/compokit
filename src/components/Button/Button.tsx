import React, { ReactNode } from "react";
import { Btn } from "./Button.styled";
import GlobalStyleWrapper from "../GlobalStyleWrapper/GlobalStyleWrapper";
import { buttonAppearance } from "../../utils/buttonAppearance";

export type Appearance = "success" | "danger" | "warning" | "info" | "idle";

export interface ButtonProps {
    title: string;
    appearance?: Appearance;
    disabled?: boolean;
    width?: number;
    height?: number;
    minWidth?: number;
    padding?: number;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = (props: ButtonProps) => {
    const {
        title,
        appearance,
        disabled = false,
        width,
        height,
        minWidth,
        padding,
        onClick,
    } = props;

    const appVal = buttonAppearance(appearance);

    return (
        <GlobalStyleWrapper>
            <Btn
                disabled={disabled}
                width={width}
                height={height}
                padding={padding}
                minWidth={minWidth}
                title={title}
                appearanceValue={appVal}
                onClick={onClick}
            >
                {title}
            </Btn>
        </GlobalStyleWrapper>
    );
};

export default Button;

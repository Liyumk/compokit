import React, { ReactNode } from "react";
import { Btn } from "./Button.styled";
import GlobalStyleWrapper from "../GlobalStyleWrapper/GlobalStyleWrapper";
import { appearanceConverter } from "../../utils/appearanceConverter";
import { Appearance } from "../../common/types";

export interface ButtonProps {
    title: string;
    appearance?: Appearance;
    disabled?: boolean;
    minWidth?: number;
    padding?: number;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = (props: ButtonProps) => {
    const {
        title,
        appearance,
        disabled = false,
        minWidth,
        padding,
        onClick,
    } = props;

    const appVal = appearanceConverter(appearance);

    return (
        <GlobalStyleWrapper>
            <Btn
                disabled={disabled}
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

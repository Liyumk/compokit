import React from "react";
import { Appearance } from "../../common/types";
export interface ButtonProps {
    title: string;
    appearance?: Appearance;
    disabled?: boolean;
    minWidth?: number;
    padding?: number;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
declare const Button: (props: ButtonProps) => JSX.Element;
export default Button;

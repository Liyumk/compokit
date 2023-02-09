import React from "react";
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
declare const Button: (props: ButtonProps) => JSX.Element;
export default Button;

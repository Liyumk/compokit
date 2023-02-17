import React, { FC, ReactNode } from "react";
import { CompoKitColors, CompoKitSpacings } from "../CompoKit/CompoKitTheme";
export interface CompoKitButtonTheme {
    base: string;
    appearance: ButtonColors;
    selected: ButtonSelectedColors;
    disabled: string;
    icon: ButtonIcons;
    spacing: ButtonSpacings;
    fitContainer: string;
    overlay: string;
    loading: string;
}
export interface ButtonColors extends Pick<CompoKitColors, "default" | "danger" | "link" | "primary" | "subtle" | "subtleLink" | "warning"> {
    [key: string]: string;
}
export interface ButtonSpacings extends Pick<CompoKitSpacings, "compact" | "default" | "none"> {
    [key: string]: string;
}
export interface ButtonSelectedColors extends ButtonColors {
    [key: string]: string;
}
export interface ButtonIcons {
    before: string;
    after: string;
}
export type ButtonType = "button" | "submit" | "reset" | undefined;
export interface ButtonProps {
    appearance?: keyof ButtonColors;
    autoFocus?: boolean;
    className?: string;
    overlay?: ReactNode;
    href?: string;
    iconAfter?: ReactNode;
    iconBefore?: ReactNode;
    isDisabled?: boolean;
    isSelected?: boolean;
    onBlur?: React.FocusEventHandler<HTMLButtonElement> | undefined;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onFocus?: React.FocusEventHandler<HTMLButtonElement> | undefined;
    spacing?: keyof ButtonSpacings;
    target?: React.HTMLAttributeAnchorTarget | undefined;
    type?: ButtonType;
    shouldFitContainer?: boolean;
    children?: ReactNode;
    testId?: string;
    component?: React.ElementType | React.ComponentType<React.AllHTMLAttributes<HTMLElement>>;
    interactionName?: string;
    analyticsContext?: Record<string, any>;
    isLoading?: boolean;
}
export declare const Button: FC<ButtonProps>;

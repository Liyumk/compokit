import React, { FC, ReactNode, useState } from "react";
import {
    CompoKitColors,
    CompoKitSpacings,
    CompoKitStateColors,
} from "../CompoKit/CompoKitTheme";
import classNames from "classnames";
import { useTheme } from "../../hooks/useTheme";

export interface CompKitButtonTheme {
    base: string;
    appearance: ButtonColors;
    selected: ButtonSelectedColors;
    icon: string;
    spacing: ButtonSpacings;
    fitContainer: string;
}

export interface ButtonColors
    extends Pick<
        CompoKitColors,
        | "default"
        | "danger"
        | "link"
        | "primary"
        | "subtle"
        | "subtleLink"
        | "warning"
    > {
    [key: string]: string;
}

export interface ButtonSpacings
    extends Pick<CompoKitSpacings, "compact" | "default" | "none"> {
    [key: string]: string;
}

export interface ButtonSelectedColors extends ButtonColors {
    [key: string]: string;
}

export type ButtonType = "button" | "submit" | "reset" | undefined;

export interface ButtonProps {
    appearance: keyof ButtonColors;
    autoFocus: boolean;
    className: string;
    overlay: ReactNode;
    href: string;
    iconAfter: ReactNode;
    iconBefore: ReactNode;
    isDisabled: boolean;
    isSelected: boolean;
    onBlur: React.FocusEventHandler<HTMLButtonElement> | undefined;
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onFocus: React.FocusEventHandler<HTMLButtonElement> | undefined;
    spacing: string;
    target: React.HTMLAttributeAnchorTarget | undefined;
    type: ButtonType;
    shouldFitContainer: boolean;
    children: ReactNode;
    testId: string;
    component:
        | React.ElementType
        | React.ComponentType<React.AllHTMLAttributes<HTMLElement>>;
    interactionName: string;
    analyticsContext: Record<string, any>;
    isLoading: boolean;
}

export const Button: FC<ButtonProps> = ({
    appearance = "default",
    autoFocus,
    className,
    overlay,
    href,
    iconAfter,
    iconBefore,
    isDisabled,
    isSelected,
    onBlur,
    onClick,
    onFocus,
    spacing,
    target,
    type,
    shouldFitContainer,
    children,
    testId,
    component,
    interactionName,
    analyticsContext,
    isLoading,
}) => {
    const theme = useTheme().theme.button;
    const [isSelectedEvent, setIsSelectedEvent] = useState(false);

    return (
        <button
            disabled={isDisabled}
            className={classNames(
                theme.base,
                !isSelectedEvent && theme.appearance[appearance],
                isSelectedEvent && theme.selected[appearance],
                className
            )}
            onMouseDown={() => {
                isSelected && setIsSelectedEvent(true);
            }}
            onMouseUp={() => {
                isSelected && setIsSelectedEvent(false);
            }}
            onBlur={onBlur}
            onClick={onClick}
            onFocus={onFocus}
        >
            {children}
        </button>
    );
};

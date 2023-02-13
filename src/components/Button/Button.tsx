import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
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
    disabled: string;
    icon: ButtonIcons;
    spacing: ButtonSpacings;
    fitContainer: string;
    overlay: string;
    loading: string;
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

export interface ButtonIcons {
    before: string;
    after: string;
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
    spacing: keyof ButtonSpacings;
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
    spacing = "default",
    target,
    type,
    shouldFitContainer,
    children,
    testId,
    isLoading,
    component,
    interactionName,
    analyticsContext,
}) => {
    const theme = useTheme().theme.button;
    const [isSelectedEvent, setIsSelectedEvent] = useState(false);
    const refButton = useRef();

    return (
        <button
            ref={refButton.current}
            data-testId={testId}
            disabled={isDisabled}
            type={type}
            autoFocus={autoFocus}
            className={classNames(
                theme.base,
                !isSelectedEvent && !isSelected && theme.appearance[appearance],
                (isSelectedEvent || isSelected) && theme.selected[appearance],
                shouldFitContainer && theme.fitContainer,
                theme.spacing[spacing],
                (isDisabled || isLoading) && theme.disabled,
                className
            )}
            onMouseDown={() => {
                setIsSelectedEvent(true);
            }}
            onMouseUp={() => {
                setIsSelectedEvent(false);
            }}
            onBlur={onBlur}
            onClick={onClick}
            onFocus={onFocus}
        >
            {iconBefore && (
                <div className={theme.icon.before}>{iconBefore}</div>
            )}
            {appearance === "subtleLink" || appearance === "link" ? (
                <a href={href} target={target}>
                    {children}
                </a>
            ) : (
                children
            )}
            {isLoading && (
                <div className={theme.overlay}>
                    <div className={theme.loading} />
                </div>
            )}
            {iconAfter && <div className={theme.icon.after}>{iconAfter}</div>}
            {overlay && <div className={theme.overlay}>{overlay}</div>}
        </button>
    );
};

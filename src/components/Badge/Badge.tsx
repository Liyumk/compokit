import React, { CSSProperties, FC, ReactNode } from "react";
import { CompoKitAppearances } from "../CompoKit/CompoKitTheme";
import { useTheme } from "../../hooks/useTheme";
import classNames from "classnames";

export interface CompoKitBadgeTheme {
    base: string;
    appearance: BadgeAppearance;
}

export interface BadgeAppearance
    extends Pick<
        CompoKitAppearances,
        | "added"
        | "default"
        | "important"
        | "primary"
        | "primaryInverted"
        | "removed"
    > {}

export interface BadgeStyle
    extends Pick<CSSProperties, "backgroundColor" | "color"> {}

export interface BadgeProps {
    appearance: keyof BadgeAppearance;
    children: number | ReactNode;
    max: number | false;
    style: BadgeStyle;
    testId: string;
}

export const Badge: FC<BadgeProps> = ({
    appearance,
    children,
    max = 99,
    style,
    testId,
}) => {
    const theme = useTheme().theme.badge;

    const maxAppend = () => {
        if (typeof children === "number" && max && max > children) {
            console.log("inside maxappend true condition");
            return `${children} +`;
        }
        return children;
    };

    return (
        <div
            className={classNames(theme.base, theme.appearance[appearance])}
            style={style}
            data-testid={testId}
        >
            {maxAppend()}
        </div>
    );
};

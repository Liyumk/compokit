import classNames from "classnames";
import React, { FC } from "react";
import {
    CompKitAppearances,
    CompoKitColors,
    CompoKitSizes,
    CompoKitSpacings,
} from "../CompoKit/CompoKitTheme";
import { useTheme } from "../../hooks/useTheme";

export interface CompoKitProgressIndicatorTheme {
    root: CompoKitProgressIndicatorRootTheme;
    indicate: CompoKitProgressIndicatorIndicateTheme;
}

export interface CompoKitProgressIndicatorRootTheme {
    base: string;
}

export interface CompoKitProgressIndicatorIndicateTheme {
    base: string;
    color: ProgressIndicatorColors;
}

export interface ProgressIndicatorColors {
    blueBlack: string;
    lightGray: string;
}

export interface ProgressIndicatorAppearances
    extends Pick<
        CompKitAppearances,
        "default" | "help" | "inverted" | "primary"
    > {
    [key: string]: string;
}

export interface ProgressIndicatorSizes
    extends Pick<CompoKitSizes, "small" | "default" | "large"> {
    [key: string]: string;
}

export interface ProgressIndicatorSpacings
    extends Pick<CompoKitSpacings, "comfortable" | "compact" | "cozy"> {
    [key: string]: string;
}

export interface ProgressIndicatorProps {
    selectedIndex: number;
    values: any[];
    appearance: ProgressIndicatorAppearances;
    ariaControls: string;
    onSelect: () => undefined;
    size: ProgressIndicatorSizes;
    spacing: ProgressIndicatorSpacings;
    testId: string;
}

export const ProgressIndicator: FC<ProgressIndicatorProps> = ({
    selectedIndex = 1,
    values,
}) => {
    const theme = useTheme().theme.progressIndicator;

    return (
        <div className={classNames(theme.root.base)}>
            {values &&
                values.map((value, index) => (
                    <div
                        className={classNames(
                            theme.indicate.base,
                            selectedIndex === index + 1
                                ? theme.indicate.color.blueBlack
                                : theme.indicate.color.lightGray
                        )}
                    />
                ))}
        </div>
    );
};

import classNames from "classnames";
import React, { FC } from "react";
import { CompoKitSizes, CompoKitSpacings } from "../CompoKit/CompoKitTheme";
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
    appearance: ProgressIndicatorAppearances;
}

export interface Appearances {
    selected: string;
    others: string;
}

export interface ProgressIndicatorAppearances {
    default: Appearances;
    help: Appearances;
    inverted: Appearances;
    primary: Appearances;
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
    appearance: keyof ProgressIndicatorAppearances;
    ariaControls: string;
    onSelect: () => undefined;
    size: ProgressIndicatorSizes;
    spacing: ProgressIndicatorSpacings;
    testId: string;
}

export const ProgressIndicator: FC<ProgressIndicatorProps> = ({
    selectedIndex = 1,
    values,
    appearance = "default",
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
                                ? theme.indicate.appearance[appearance].selected
                                : theme.indicate.appearance[appearance].others
                        )}
                    />
                ))}
        </div>
    );
};

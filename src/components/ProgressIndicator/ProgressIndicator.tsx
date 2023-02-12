import classNames from "classnames";
import React, { FC, useState } from "react";
import { CompoKitSizes, CompoKitSpacings } from "../CompoKit/CompoKitTheme";
import { useTheme } from "../../hooks/useTheme";

export interface CompoKitProgressIndicatorTheme {
    root: CompoKitProgressIndicatorRootTheme;
    indicate: CompoKitProgressIndicatorIndicateTheme;
}

export interface CompoKitProgressIndicatorRootTheme {
    base: string;
    spacing: ProgressIndicatorSpacings;
}

export interface CompoKitProgressIndicatorIndicateTheme {
    base: string;
    appearance: ProgressIndicatorAppearances;
    size: ProgressIndicatorSizes;
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
    // [key: string]: string;
}

export interface ProgressIndicatorSpacings
    extends Pick<CompoKitSpacings, "comfortable" | "compact" | "cozy"> {
    // [key: string]: string;
}

export interface ProgressIndicatorProps {
    selectedIndex: number;
    values: any[];
    appearance: keyof ProgressIndicatorAppearances;
    ariaControls: string;
    ariaLabel: string;
    onSelect?: (index: number) => void;
    size: keyof ProgressIndicatorSizes;
    spacing: keyof ProgressIndicatorSpacings;
    testId: string;
}

export const ProgressIndicator: FC<ProgressIndicatorProps> = ({
    selectedIndex = 1,
    values,
    appearance = "default",
    ariaControls,
    ariaLabel,
    onSelect,
    size,
    spacing,
    testId,
}) => {
    const theme = useTheme().theme.progressIndicator;

    const [prevSelectedIndex, setPrevSelectedIndex] = useState(selectedIndex);

    if (selectedIndex !== prevSelectedIndex) {
        onSelect && onSelect(prevSelectedIndex);
    }

    return (
        <div
            className={classNames(theme.root.base, theme.root.spacing[spacing])}
            data-testId={testId}
        >
            {values &&
                values.map((value, index) => (
                    <div
                        aria-controls={ariaControls + index}
                        aria-aria-label={ariaLabel + index}
                        defaultValue={value}
                        className={classNames(
                            theme.indicate.base,
                            selectedIndex === index + 1
                                ? theme.indicate.appearance[appearance].selected
                                : theme.indicate.appearance[appearance].others,
                            theme.indicate.size[size]
                        )}
                    />
                ))}
        </div>
    );
};

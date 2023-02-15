import React, { FC, PropsWithChildren } from "react";
import classNames from "classnames";
import { useTheme } from "../../hooks/useTheme";
import "./ProgressBar.css";

export interface CompKitProgressBarTheme {
    root: CompKitProgressBarRootTheme;
}

export interface CompKitProgressBarRootTheme {
    outer: string;
    filler: string;
    appearance: ProgressBarAppearance;
}

export interface ProgressBarAppearanceProperties {
    inner: string;
    outer: string;
}

export interface ProgressBarAppearance {
    default: ProgressBarAppearanceProperties;
    success: ProgressBarAppearanceProperties;
    inverse: ProgressBarAppearanceProperties;
}

export type value = 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;

export interface ProgressBarProps extends PropsWithChildren {
    appearance?: keyof ProgressBarAppearance;
    value: value;
    ariaLabel?: string;
    testId?: string;
    isIndeterminate?: boolean;
}

export const ProgressBar: FC<ProgressBarProps> = ({
    appearance = "default",
    value,
    ariaLabel,
    testId,
    isIndeterminate,
}) => {
    const theme = useTheme().theme.progressBar;
    const successAndNotIndeterminate =
        appearance === "success" && !isIndeterminate;
    const valueAndNotIndeterminate = value && !isIndeterminate;
    return (
        <>
            <div
                className={classNames(
                    theme.root.outer,
                    theme.root.appearance[appearance].outer
                )}
                aria-label={ariaLabel}
                data-testId={testId}
            >
                <div
                    className={classNames(
                        theme.root.filler,
                        theme.root.appearance[appearance].inner,
                        isIndeterminate && "indeterminate"
                    )}
                    style={{
                        width: `${
                            successAndNotIndeterminate
                                ? 100
                                : valueAndNotIndeterminate
                                ? value * 100
                                : isIndeterminate
                                ? 50
                                : 0
                        }%`,
                    }}
                ></div>
            </div>
        </>
    );
};

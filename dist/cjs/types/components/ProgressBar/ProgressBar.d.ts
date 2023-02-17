import { FC, PropsWithChildren } from "react";
import "./ProgressBar.css";
export interface CompoKitProgressBarTheme {
    root: CompoKitProgressBarRootTheme;
}
export interface CompoKitProgressBarRootTheme {
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
export declare const ProgressBar: FC<ProgressBarProps>;

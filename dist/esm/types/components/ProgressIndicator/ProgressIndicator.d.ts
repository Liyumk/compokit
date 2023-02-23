import { FC } from "react";
import { CompoKitSizes, CompoKitSpacings } from "../CompoKit/CompoKitTheme";
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
    pointer: string;
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
export interface ProgressIndicatorSizes extends Pick<CompoKitSizes, "small" | "default" | "large"> {
    [key: string]: string;
}
export interface ProgressIndicatorSpacings extends Pick<CompoKitSpacings, "comfortable" | "cozy" | "compact"> {
    [key: string]: string;
}
export interface ProgressIndicatorProps {
    selectedIndex?: number;
    values: any[];
    appearance?: keyof ProgressIndicatorAppearances;
    ariaControls?: string;
    ariaLabel?: string;
    onSelect?: () => void;
    size?: keyof ProgressIndicatorSizes;
    spacing?: keyof ProgressIndicatorSpacings;
    testId?: string;
}
export declare const ProgressIndicator: FC<ProgressIndicatorProps>;

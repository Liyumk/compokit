import { CSSProperties, FC, ReactNode } from "react";
import { CompoKitAppearances } from "../CompoKit/CompoKitTheme";
export interface CompoKitBadgeTheme {
    base: string;
    appearance: BadgeAppearance;
}
export interface BadgeAppearance extends Pick<CompoKitAppearances, "added" | "default" | "important" | "primary" | "primaryInverted" | "removed"> {
}
export interface BadgeStyle extends Pick<CSSProperties, "backgroundColor" | "color"> {
}
export interface BadgeProps {
    appearance?: keyof BadgeAppearance;
    children?: number | ReactNode;
    max?: number | false;
    style?: BadgeStyle;
    testId?: string;
}
export declare const Badge: FC<BadgeProps>;

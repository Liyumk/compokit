import { CSSProperties, FC, PropsWithChildren } from "react";
import { CompoKitAppearances } from "../CompoKit/CompoKitTheme";
export interface CompoKitLozengeTheme {
    base: string;
    appearance: LozengeAppearance;
    isBoldAppearance: LozengeAppearance;
}
export interface LozengeAppearance extends Pick<CompoKitAppearances, "default" | "inprogress" | "moved" | "new" | "removed" | "success"> {
}
export interface LozengeStyle extends Pick<CSSProperties, "backgroundColor" | "color"> {
}
export interface LozengeProps extends PropsWithChildren {
    appearance?: keyof LozengeAppearance;
    isBold?: boolean;
    maxWidth?: number | string;
    style?: LozengeStyle;
    testId?: string;
}
export declare const Lozenge: FC<LozengeProps>;

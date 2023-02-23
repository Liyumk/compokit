import { FC, PropsWithChildren, ReactElement } from "react";
import { CompoKitAppearances } from "../CompoKit/CompoKitTheme";
export interface CompoKitBannerTheme {
    base: string;
    appearance: BannerAppearance;
}
export interface BannerAppearance extends Pick<CompoKitAppearances, "warning" | "error" | "announcement"> {
}
export interface BannerProps extends PropsWithChildren {
    appearance?: keyof BannerAppearance;
    icon?: ReactElement;
    testId?: string;
}
export declare const Banner: FC<BannerProps>;

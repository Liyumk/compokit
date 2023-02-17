import { FC, PropsWithChildren, ReactElement, ReactNode } from "react";
import { CompoKitAppearances } from "../CompoKit/CompoKitTheme";
export interface CompoKitSectionMessage {
    base: string;
    appearance: SectionMessageAppearance;
    left: string;
    right: string;
    rightTop: string;
    rightBottom: string;
    title: string;
}
export interface SectionMessageAppearance extends Pick<CompoKitAppearances, "information" | "warning" | "error" | "success" | "discovery"> {
}
export interface SectionMessageProps extends PropsWithChildren {
    appearance?: keyof SectionMessageAppearance;
    title?: string;
    actions?: ReactElement[];
    icon?: ReactNode;
    testId?: string;
}
export declare const SectionMessage: FC<SectionMessageProps>;

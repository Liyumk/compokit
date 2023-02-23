import React, { FC, PropsWithChildren } from "react";
import { CompoKitStatus, CompoKitAppearances, CompoKitSizes } from "../CompoKit/CompoKitTheme";
export interface CompoKitAvatarTheme {
    base: string;
    wrapper: string;
    appearance: AvatarAppearances;
    default: string;
    presence: AvatarPresence;
    sizes: AvatarSizes;
    status: AvatarStatus;
    disabled: string;
}
export interface AvatarAppearances extends Pick<CompoKitAppearances, "circle" | "square"> {
}
export interface AvatarPresence {
    base: string;
    online: AvatarPresenceSize;
    busy: AvatarPresenceSize;
    focus: AvatarPresenceSize;
    offline: AvatarPresenceSize;
}
export interface AvatarPresenceSize extends Pick<CompoKitSizes, "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge"> {
    base: string;
    innerBase?: string;
}
export interface AvatarPresenceProps extends Omit<AvatarPresence, "base"> {
}
export interface AvatarSizes extends Omit<AvatarPresenceSize, "base" | "innerBase"> {
}
export interface AvatarStatus extends Pick<CompoKitStatus, "approved" | "declined" | "locked"> {
    [key: string]: string;
}
export interface AvatarProps extends PropsWithChildren {
    appearance?: keyof AvatarAppearances;
    label?: string;
    borderColour?: string;
    href?: string;
    isDisabled?: boolean;
    name?: string;
    presence?: keyof AvatarPresenceProps;
    src: string;
    alt?: string;
    size?: keyof AvatarSizes;
    status?: keyof AvatarStatus;
    stackIndex?: number;
    tabIndex?: number;
    target?: React.HTMLAttributeAnchorTarget | undefined;
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
    testId?: string;
    analyticsContext?: Record<string, any>;
}
export declare const Avatar: FC<AvatarProps>;

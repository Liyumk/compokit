import { CompoKitAvatarTheme } from "../Avatar/Avatar";
import { CompoKitBadgeTheme } from "../Badge";
import { CompoKitBannerTheme } from "../Banner/Banner";
import { CompoKitButtonTheme } from "../Button/Button";
import { CompoKitLozengeTheme } from "../Lozenge";
import { CompoKitPageHeaderTheme } from "../PageHeader";
import { CompoKitProgressBarTheme } from "../ProgressBar/ProgressBar";
import { CompoKitProgressIndicatorTheme } from "../ProgressIndicator/ProgressIndicator";
import { CompoKitSectionMessage } from "../SectionMessage/SectionMessage";
export interface CompoKitStateColors {
    default: string;
    danger: string;
    link: string;
    primary: string;
    subtle: string;
    subtleLink: string;
    warning: string;
}
export interface CompoKitColors extends CompoKitStateColors {
    [key: string]: string;
    blue: string;
    cyan: string;
    dark: string;
    gray: string;
    green: string;
    indigo: string;
    light: string;
    lime: string;
    pink: string;
    purple: string;
    red: string;
    teal: string;
    yellow: string;
}
export interface CompoKitSizes {
    xs: string;
    xsmall: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    default: string;
    small: string;
    medium: string;
    large: string;
    xlarge: string;
    xxlarge: string;
}
export interface CompoKitStatus {
    approved: string;
    declined: string;
    locked: string;
}
export interface CompoKitAppearances {
    circle: string;
    square: string;
    added: string;
    default: string;
    important: string;
    primary: string;
    primaryInverted: string;
    removed: string;
    warning: string;
    error: string;
    announcement: string;
    inprogress: string;
    moved: string;
    new: string;
    success: string;
    information: string;
    discovery: string;
}
export interface CompoKitSpacings {
    default: string;
    comfortable: string;
    cozy: string;
    compact: string;
    none: string;
}
export interface CompoKitTheme {
    progressIndicator: CompoKitProgressIndicatorTheme;
    button: CompoKitButtonTheme;
    progressBar: CompoKitProgressBarTheme;
    avatar: CompoKitAvatarTheme;
    badge: CompoKitBadgeTheme;
    banner: CompoKitBannerTheme;
    lozenge: CompoKitLozengeTheme;
    sectionMessage: CompoKitSectionMessage;
    pageHeader: CompoKitPageHeaderTheme;
}

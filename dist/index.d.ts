import React, { PropsWithChildren, FC, CSSProperties, ReactNode, ReactElement, ImgHTMLAttributes } from 'react';

interface CompoKitProgressBarTheme {
    root: CompoKitProgressBarRootTheme;
}
interface CompoKitProgressBarRootTheme {
    outer: string;
    filler: string;
    appearance: ProgressBarAppearance;
}
interface ProgressBarAppearanceProperties {
    inner: string;
    outer: string;
}
interface ProgressBarAppearance {
    default: ProgressBarAppearanceProperties;
    success: ProgressBarAppearanceProperties;
    inverse: ProgressBarAppearanceProperties;
}
type value = 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;
interface ProgressBarProps extends PropsWithChildren {
    appearance?: keyof ProgressBarAppearance;
    value: value;
    ariaLabel?: string;
    testId?: string;
    isIndeterminate?: boolean;
}
declare const ProgressBar: FC<ProgressBarProps>;

interface CompoKitAvatarTheme {
    base: string;
    wrapper: string;
    appearance: AvatarAppearances;
    default: string;
    presence: AvatarPresence;
    sizes: AvatarSizes;
    status: AvatarStatus;
    disabled: string;
}
interface AvatarAppearances extends Pick<CompoKitAppearances, "circle" | "square"> {
}
interface AvatarPresence {
    base: string;
    online: AvatarPresenceSize;
    busy: AvatarPresenceSize;
    focus: AvatarPresenceSize;
    offline: AvatarPresenceSize;
}
interface AvatarPresenceSize extends Pick<CompoKitSizes, "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge"> {
    base: string;
    innerBase?: string;
}
interface AvatarPresenceProps extends Omit<AvatarPresence, "base"> {
}
interface AvatarSizes extends Omit<AvatarPresenceSize, "base" | "innerBase"> {
}
interface AvatarStatus extends Pick<CompoKitStatus, "approved" | "declined" | "locked"> {
    [key: string]: string;
}
interface AvatarProps extends PropsWithChildren {
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
declare const Avatar: FC<AvatarProps>;

interface CompoKitBadgeTheme {
    base: string;
    appearance: BadgeAppearance;
}
interface BadgeAppearance extends Pick<CompoKitAppearances, "added" | "default" | "important" | "primary" | "primaryInverted" | "removed"> {
}
interface BadgeStyle extends Pick<CSSProperties, "backgroundColor" | "color"> {
}
interface BadgeProps {
    appearance?: keyof BadgeAppearance;
    children?: number | ReactNode;
    max?: number | false;
    style?: BadgeStyle;
    testId?: string;
}
declare const Badge: FC<BadgeProps>;

interface CompoKitBannerTheme {
    base: string;
    appearance: BannerAppearance;
}
interface BannerAppearance extends Pick<CompoKitAppearances, "warning" | "error" | "announcement"> {
}
interface BannerProps extends PropsWithChildren {
    appearance?: keyof BannerAppearance;
    icon?: ReactElement;
    testId?: string;
}
declare const Banner: FC<BannerProps>;

interface CompoKitButtonTheme {
    base: string;
    appearance: ButtonColors;
    selected: ButtonSelectedColors;
    disabled: string;
    icon: ButtonIcons;
    spacing: ButtonSpacings;
    fitContainer: string;
    overlay: string;
    loading: string;
}
interface ButtonColors extends Pick<CompoKitColors, "default" | "danger" | "link" | "primary" | "subtle" | "subtleLink" | "warning"> {
    [key: string]: string;
}
interface ButtonSpacings extends Pick<CompoKitSpacings, "compact" | "default" | "none"> {
    [key: string]: string;
}
interface ButtonSelectedColors extends ButtonColors {
    [key: string]: string;
}
interface ButtonIcons {
    before: string;
    after: string;
}
type ButtonType = "button" | "submit" | "reset" | undefined;
interface ButtonProps {
    appearance?: keyof ButtonColors;
    autoFocus?: boolean;
    className?: string;
    overlay?: ReactNode;
    href?: string;
    iconAfter?: ReactNode;
    iconBefore?: ReactNode;
    isDisabled?: boolean;
    isSelected?: boolean;
    onBlur?: React.FocusEventHandler<HTMLButtonElement> | undefined;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onFocus?: React.FocusEventHandler<HTMLButtonElement> | undefined;
    spacing?: keyof ButtonSpacings;
    target?: React.HTMLAttributeAnchorTarget | undefined;
    type?: ButtonType;
    shouldFitContainer?: boolean;
    children?: ReactNode;
    testId?: string;
    component?: React.ElementType | React.ComponentType<React.AllHTMLAttributes<HTMLElement>>;
    interactionName?: string;
    analyticsContext?: Record<string, any>;
    isLoading?: boolean;
}
declare const Button: FC<ButtonProps>;

interface CompoKitLozengeTheme {
    base: string;
    appearance: LozengeAppearance;
    isBoldAppearance: LozengeAppearance;
}
interface LozengeAppearance extends Pick<CompoKitAppearances, "default" | "inprogress" | "moved" | "new" | "removed" | "success"> {
}
interface LozengeStyle extends Pick<CSSProperties, "backgroundColor" | "color"> {
}
interface LozengeProps extends PropsWithChildren {
    appearance?: keyof LozengeAppearance;
    isBold?: boolean;
    maxWidth?: number | string;
    style?: LozengeStyle;
    testId?: string;
}
declare const Lozenge: FC<LozengeProps>;

interface CompoKitPageHeaderTheme {
    base: string;
    titleAndAction: string;
    title: PageHeaderTitle;
    action: string;
    bottomBar: string;
}
interface PageHeaderTitle {
    base: string;
    truncate: string;
}
interface PageHeaderProps extends PropsWithChildren {
    actions?: ReactElement | ReactElement[];
    bottomBar?: ReactElement | ReactElement[];
    breadCrumbs?: ReactElement | ReactElement[];
    disableTitleStyle?: boolean;
    truncateTitle?: boolean;
    innerRef?: (e: any) => undefined;
    id?: string;
}
declare const PageHeader: FC<PageHeaderProps>;

interface CompoKitSectionMessage {
    base: string;
    appearance: SectionMessageAppearance;
    left: string;
    right: string;
    rightTop: string;
    rightBottom: string;
    title: string;
}
interface SectionMessageAppearance extends Pick<CompoKitAppearances, "information" | "warning" | "error" | "success" | "discovery"> {
}
interface SectionMessageProps extends PropsWithChildren {
    appearance?: keyof SectionMessageAppearance;
    title?: string;
    actions?: ReactElement[];
    icon?: ReactNode;
    testId?: string;
}
declare const SectionMessage: FC<SectionMessageProps>;

interface CompoKitStateColors {
    default: string;
    danger: string;
    link: string;
    primary: string;
    subtle: string;
    subtleLink: string;
    warning: string;
}
interface CompoKitColors extends CompoKitStateColors {
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
interface CompoKitSizes {
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
interface CompoKitStatus {
    approved: string;
    declined: string;
    locked: string;
}
interface CompoKitAppearances {
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
interface CompoKitSpacings {
    default: string;
    comfortable: string;
    cozy: string;
    compact: string;
    none: string;
}

interface CompoKitProgressIndicatorTheme {
    root: CompoKitProgressIndicatorRootTheme;
    indicate: CompoKitProgressIndicatorIndicateTheme;
}
interface CompoKitProgressIndicatorRootTheme {
    base: string;
    spacing: ProgressIndicatorSpacings;
}
interface CompoKitProgressIndicatorIndicateTheme {
    base: string;
    appearance: ProgressIndicatorAppearances;
    size: ProgressIndicatorSizes;
    pointer: string;
}
interface Appearances {
    selected: string;
    others: string;
}
interface ProgressIndicatorAppearances {
    default: Appearances;
    help: Appearances;
    inverted: Appearances;
    primary: Appearances;
}
interface ProgressIndicatorSizes extends Pick<CompoKitSizes, "small" | "default" | "large"> {
    [key: string]: string;
}
interface ProgressIndicatorSpacings extends Pick<CompoKitSpacings, "comfortable" | "cozy" | "compact"> {
    [key: string]: string;
}
interface ProgressIndicatorProps {
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
declare const ProgressIndicator: FC<ProgressIndicatorProps>;

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    isDark?: boolean;
    srcDark?: string;
}
declare const Image: FC<ImageProps>;

export { Appearances, Avatar, AvatarAppearances, AvatarPresence, AvatarPresenceProps, AvatarPresenceSize, AvatarProps, AvatarSizes, AvatarStatus, Badge, BadgeAppearance, BadgeProps, BadgeStyle, Banner, BannerAppearance, BannerProps, Button, ButtonColors, ButtonIcons, ButtonProps, ButtonSelectedColors, ButtonSpacings, ButtonType, CompoKitAvatarTheme, CompoKitBadgeTheme, CompoKitBannerTheme, CompoKitButtonTheme, CompoKitLozengeTheme, CompoKitPageHeaderTheme, CompoKitProgressBarRootTheme, CompoKitProgressBarTheme, CompoKitProgressIndicatorIndicateTheme, CompoKitProgressIndicatorRootTheme, CompoKitProgressIndicatorTheme, CompoKitSectionMessage, Image, ImageProps, Lozenge, LozengeAppearance, LozengeProps, LozengeStyle, PageHeader, PageHeaderProps, PageHeaderTitle, ProgressBar, ProgressBarAppearance, ProgressBarAppearanceProperties, ProgressBarProps, ProgressIndicator, ProgressIndicatorAppearances, ProgressIndicatorProps, ProgressIndicatorSizes, ProgressIndicatorSpacings, SectionMessage, SectionMessageAppearance, SectionMessageProps, value };

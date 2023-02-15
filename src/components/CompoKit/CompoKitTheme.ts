import { CompoKitAvatarTheme } from "../Avatar/Avatar";
import { CompoKitButtonTheme } from "../Button/Button";
import {  CompoKitProgressBarTheme } from "../ProgressBar/ProgressBar";
import { CompoKitProgressIndicatorTheme } from "../ProgressIndicator/ProgressIndicator";

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
  [key: string]: string
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
  medium:string;
  large: string;
  xlarge:string;
  xxlarge:string;
  
}

export interface CompoKitStatus {
  approved:string,
  declined: string,
  locked: string,
}

export interface CompoKitAppearances {
  circle: string;
  square: string;
}

export interface CompoKitSpacings {
  default: string;
  comfortable: string;
  cozy: string;
  compact: string;
  none: string
}

export interface CompoKitTheme {
  progressIndicator: CompoKitProgressIndicatorTheme;
  button: CompoKitButtonTheme;
  progressBar: CompoKitProgressBarTheme;
  avatar: CompoKitAvatarTheme;
}
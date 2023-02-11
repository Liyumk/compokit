import { CompoKitProgressIndicatorTheme } from "../ProgressIndicator/ProgressIndicator";

export interface CompoKitStateColors {
  info: string;
  failure: string;
  success: string;
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

export interface CompKitAppearances {
  default: string;
  help: string;
  inverted: string;
  primary: string;
}

export interface CompoKitSizes {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  small: string;
  default: string;
  large: string;
}

export interface CompoKitSpacings {
  comfortable: string;
  cozy: string;
  compact: string;
}

export interface CompoKitTheme {
  progressIndicator: CompoKitProgressIndicatorTheme
}
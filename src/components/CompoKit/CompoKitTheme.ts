import { CompKitButtonTheme } from "../Button/Button";
import { CompKitProgressBarTheme } from "../ProgressBar/ProgressBar";
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
  sm: string;
  md: string;
  lg: string;
  xl: string;
  small: string;
  default: string;
  large: string;
}

export interface CompKitAppearances {

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
  button: CompKitButtonTheme;
  progressBar: CompKitProgressBarTheme;
}
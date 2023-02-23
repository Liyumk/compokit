import { ButtonProps } from "./Button";
export type AppearanceValue = "#4CAF50" | "#f44336" | "#008CBA" | "orange" | "gray" | "gainsboro";
export interface ButtonStyleProps extends ButtonProps {
    appearanceValue: AppearanceValue;
}
export declare const Btn: import("styled-components").StyledComponent<"button", any, ButtonStyleProps, never>;

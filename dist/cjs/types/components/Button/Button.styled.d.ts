import { ButtonProps } from "./Button";
import { AppearanceValue } from "../../common/types";
export interface ButtonStyleProps extends ButtonProps {
    appearanceValue: AppearanceValue;
}
export declare const Btn: import("styled-components").StyledComponent<"button", any, ButtonStyleProps, never>;

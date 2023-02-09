import styled from "styled-components";
import { ButtonProps } from "./Button";

export type AppearanceValue =
    | "#4CAF50"
    | "#f44336"
    | "#008CBA"
    | "orange"
    | "gray"
    | "gainsboro";

export interface ButtonStyleProps extends ButtonProps {
    appearanceValue: AppearanceValue;
}

export const Btn = styled.button<ButtonStyleProps>`
    padding: ${(props) => props.padding || "0.6rem"};
    border-radius: 0.3rem;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: #a6a5a59f;
    }
    background-color: ${(props) => props.appearanceValue};
    color: white;
    min-width: ${(props) => props.minWidth}rem;
`;

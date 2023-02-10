import styled from "styled-components";
import { ButtonProps } from "./Button";
import { AppearanceValue } from "../../common/types";

export interface ButtonStyleProps extends ButtonProps {
    appearanceValue: AppearanceValue;
}

export const Btn = styled.button<ButtonStyleProps>`
    padding: ${(props) => props.padding || "0.6rem"};
    border-radius: 0.3rem;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: #7474749f;
    }
    background-color: ${(props) => props.appearanceValue};
    color: white;
    min-width: ${(props) => props.minWidth}rem;
`;

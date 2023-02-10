import styled from "styled-components";
import { SectionMessageProps } from "./SectionMessage";
import { AppearanceValue } from "../../common/types";

export interface SectionMessageStyle extends SectionMessageProps {
    appearanceValue: AppearanceValue;
}

export const SectionMsgContainer = styled.div<SectionMessageStyle>`
    padding: 1rem;
    width: 50%;
    background-color: ${(props) => props.appearanceValue || "lightGray"};
    color: white;
    border-radius: 0.3rem;
    display: flex;
    column-gap: 1rem;
`;

export const IconWrapper = styled.div``;

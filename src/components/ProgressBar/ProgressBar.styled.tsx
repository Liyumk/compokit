import styled from "styled-components";
import { ProgressBarProps } from "./ProgressBar";

export const Wrapper = styled.div`
    width: 100%;
    height: 10px;
    padding-inline: 0;
    border-radius: 100px;
    margin: 40;
    background: gainsboro;
    display: flex;
    align-items: center;
`;

export const Filler = styled.div<ProgressBarProps>`
    height: 100%;
    width: ${(props) => props.value}%;
    border-radius: 100px;
    background-color: gray;
`;

export const Indicator = styled.div`
    border-radius: 100%;
    height: 20px;
    width: 20px;
    margin-left: -4px;
    background-color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 0.6rem;
`;

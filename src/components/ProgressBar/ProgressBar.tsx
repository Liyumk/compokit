import React from "react";
import { Wrapper, Filler, Indicator } from "./style";

export interface ProgressBarProps {
    value: number;
    showNumber?: boolean;
}

const ProgressBar = ({ value, showNumber = false }: ProgressBarProps) => {
    const completed = value > 100 ? 100 : value < 0 ? 0 : value;

    return (
        <Wrapper>
            <Filler value={completed}></Filler>
            <Indicator>{showNumber && value}</Indicator>
        </Wrapper>
    );
};

export default ProgressBar;

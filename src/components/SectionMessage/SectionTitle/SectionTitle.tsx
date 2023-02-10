import React from "react";
import { Header } from "./SectionTitle.styled";

export interface SectionTitleProps {
    title: string;
}

const SectionTitle = (props: SectionTitleProps) => {
    const { title } = props;
    return <Header>{title}</Header>;
};

export default SectionTitle;

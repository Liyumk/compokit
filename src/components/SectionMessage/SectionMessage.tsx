import React, { ReactNode } from "react";
import { IconWrapper, SectionMsgContainer } from "./SectionMessage.styled";
import GlobalStyleWrapper from "../GlobalStyleWrapper/GlobalStyleWrapper";
import { appearanceConverter } from "../../utils/appearanceConverter";
import { Appearance, AppearanceValue } from "../../common/types";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdOutlineDangerous } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { AiFillWarning } from "react-icons/ai";

export interface SectionMessageProps {
    children: ReactNode;
    appearance?: Appearance;
}

const SectionMessage = (props: SectionMessageProps) => {
    const { children, appearance } = props;

    const appearConverted = appearanceConverter(appearance);

    const IconProvider = () => {
        switch (appearance) {
            case "danger":
                return <MdOutlineDangerous size={30}></MdOutlineDangerous>;
            case "idle":
                return null;
            case "info":
                return <AiOutlineInfoCircle size={30}></AiOutlineInfoCircle>;
            case "success":
                return <TiTick size={30}></TiTick>;
            case "warning":
                return <AiFillWarning size={30}></AiFillWarning>;
            default:
                return null;
        }
    };

    return (
        <GlobalStyleWrapper>
            <SectionMsgContainer appearanceValue={appearConverted}>
                <IconWrapper>
                    <IconProvider></IconProvider>
                </IconWrapper>
                <div>{children}</div>
            </SectionMsgContainer>
        </GlobalStyleWrapper>
    );
};

export default SectionMessage;

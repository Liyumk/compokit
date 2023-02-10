import { ReactNode } from "react";
import { Appearance } from "../../common/types";
export interface SectionMessageProps {
    children: ReactNode;
    appearance?: Appearance;
}
declare const SectionMessage: (props: SectionMessageProps) => JSX.Element;
export default SectionMessage;

import { ReactNode } from "react";
export interface ModalHeaderProps {
    children?: ReactNode;
    title: string;
}
declare const ModalHeader: (props: ModalHeaderProps) => JSX.Element;
export default ModalHeader;

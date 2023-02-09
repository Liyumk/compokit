import { ReactNode } from "react";
export interface ModalDialogProps {
    children: ReactNode;
    height?: number | string;
    width?: string | number | null;
}
declare const ModalDialog: (props: ModalDialogProps) => JSX.Element;
export default ModalDialog;

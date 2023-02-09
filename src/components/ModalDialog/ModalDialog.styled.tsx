import styled from "styled-components";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ModalDialogProps } from "./ModalDialog";

export const ModalWrapper = styled.div<ModalDialogProps>`
    width: ${(props) => (props.width ? props.width.toString() + "px" : "40%")};
    background-color: white;
    display: block;
    height: ${(props) =>
        props.height ? props.height.toString() + "px" : "fit-content"};
    overflow: auto,
    flex-direction: column;
    justify-content: space-between;
    padding: 1.5rem;
    border-radius: 0.5rem;
    animation: fadeIn 0.8s;
    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;

export const MainWrapperStyle = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    marginInline: "auto",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    top: 0,
    left: 0,
    padding: 16,
} as DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

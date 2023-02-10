import styled from "styled-components";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ModalDialogProps } from "./ModalDialog";

export const ModalWrapper = styled.div<ModalDialogProps>`
    flex-direction: column;
    justify-content: space-between;
    width: ${(props) => (props.width ? props.width + "rem" : "50%")};
    height: ${(props) =>
        props.height ? props.height.toString() + "px" : "fit-content"};
    background-color: white;
    padding: 1.5rem;
    border-radius: 0.5rem;

    /* Fade in animation */
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

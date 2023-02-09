/// <reference types="react" />
import React, { ReactNode } from 'react';

interface ProgressBarProps {
    value: number;
    showNumber?: boolean;
}
declare const ProgressBar: ({ value, showNumber }: ProgressBarProps) => JSX.Element;

interface ModalDialogProps {
    children: ReactNode;
    height?: number | string;
    width?: string | number | null;
}
declare const ModalDialog: (props: ModalDialogProps) => JSX.Element;

interface ModalHeaderProps {
    children?: ReactNode;
    title: string;
}
declare const ModalHeader: (props: ModalHeaderProps) => JSX.Element;

interface ModalBodyProps {
    children: ReactNode;
}
declare const ModalBody: (props: ModalBodyProps) => JSX.Element;

interface ModalFooterProps {
    children: ReactNode;
}
declare const ModalFooter: (props: ModalFooterProps) => JSX.Element;

type Appearance = "success" | "danger" | "warning" | "info" | "idle";
interface ButtonProps {
    title: string;
    appearance?: Appearance;
    disabled?: boolean;
    width?: number;
    height?: number;
    minWidth?: number;
    padding?: number;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
declare const Button: (props: ButtonProps) => JSX.Element;

export { Button, ModalBody, ModalDialog, ModalFooter, ModalHeader, ProgressBar };

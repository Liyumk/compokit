/// <reference types="react" />
import React, { ReactNode } from 'react';

interface ProgressBarProps {
    value: number;
    showNumber?: boolean;
}
declare const ProgressBar: ({ value, showNumber }: ProgressBarProps) => JSX.Element;

type Appearance$1 = "success" | "danger" | "warning" | "info" | "idle";
interface ButtonProps {
    title: string;
    appearance?: Appearance$1;
    disabled?: boolean;
    width?: number;
    height?: number;
    minWidth?: number;
    padding?: number;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
declare const Button: (props: ButtonProps) => JSX.Element;

type Appearance = "circle" | "square";
type Size = "small" | "medium" | "large";
interface AvatarProps {
    appearance?: Appearance;
    size: Size;
    borderColor?: string;
    src: string;
    alt?: string;
}
declare const Avatar: (props: AvatarProps) => JSX.Element;

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

export { Avatar, Button, ModalBody, ModalDialog, ModalFooter, ModalHeader, ProgressBar };

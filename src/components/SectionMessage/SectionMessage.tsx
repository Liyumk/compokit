import React, {
    ElementType,
    FC,
    PropsWithChildren,
    ReactElement,
    ReactNode,
} from "react";
import { CompoKitAppearances } from "../CompoKit/CompoKitTheme";
import {
    AiFillAccountBook,
    AiFillInfoCircle,
    AiFillQuestionCircle,
    AiFillWarning,
} from "react-icons/ai";
import { MdReportGmailerrorred } from "react-icons/md";
import classNames from "classnames";
import { useTheme } from "../../hooks/useTheme";
import { TiInfo, TiTick, TiWarning } from "react-icons/ti";

export interface CompoKitSectionMessage {
    base: string;
    appearance: SectionMessageAppearance;
    left: string;
    right: string;
    rightTop: string;
    rightBottom: string;
    title: string;
}

export interface SectionMessageAppearance
    extends Pick<
        CompoKitAppearances,
        "information" | "warning" | "error" | "success" | "discovery"
    > {}

export interface SectionMessageProps extends PropsWithChildren {
    appearance: keyof SectionMessageAppearance;
    title: string;
    actions: ReactElement[];
    icon: ReactNode;
    testId: string;
}

export const SectionMessage: FC<SectionMessageProps> = ({
    appearance,
    children,
    title,
    actions,
    icon,
    testId,
}) => {
    const theme = useTheme().theme.sectionMessage;

    const appearanceIcon = () => {
        const icoSize = 26;
        switch (appearance) {
            case "information":
                return (
                    <AiFillInfoCircle
                        size={icoSize}
                        className="text-blue-600"
                    ></AiFillInfoCircle>
                );
            case "success":
                return (
                    <div>
                        <TiTick size={icoSize}></TiTick>
                    </div>
                );
            case "discovery":
                return (
                    <AiFillQuestionCircle
                        size={icoSize}
                        className="text-indigo-500"
                    ></AiFillQuestionCircle>
                );
            case "error":
                return (
                    <MdReportGmailerrorred
                        size={icoSize}
                        className="text-red-500"
                    ></MdReportGmailerrorred>
                );
            case "warning":
                return (
                    <AiFillWarning
                        size={icoSize}
                        className="text-orange-500"
                    ></AiFillWarning>
                );
            default:
                return;
        }
    };

    return (
        <div
            data-testid={testId}
            className={classNames(theme.base, theme.appearance[appearance])}
        >
            <div className={classNames(theme.left)}>
                {icon ? icon : appearanceIcon()}
            </div>
            <div className={classNames(theme.right)}>
                <div className={theme.title}>{title}</div>
                {children}
                <div className={classNames("w-fit flex gap-x-2")}>
                    {actions}
                </div>
            </div>
        </div>
    );
};

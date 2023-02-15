import React, { FC, PropsWithChildren, ReactNode } from "react";
import {
    CompoKitStatus,
    CompoKitAppearances,
    CompoKitSizes,
} from "../CompoKit/CompoKitTheme";
import { useTheme } from "../../hooks/useTheme";
import classNames from "classnames";
import "./Avatar.css";

export interface CompoKitAvatarTheme {
    base: string;
    appearance: AvatarAppearances;
    default: string;
    presence: AvatarPresence;
    sizes: AvatarSizes;
    status: AvatarStatus;
    disabled: string;
}

export interface AvatarAppearances
    extends Pick<CompoKitAppearances, "circle" | "square"> {
    [key: string]: string;
}

export interface AvatarPresence {
    online: string;
    busy: string;
    focus: string;
    offline: string;
}

export interface AvatarSizes
    extends Pick<
        CompoKitSizes,
        "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge"
    > {
    [key: string]: string;
}

export interface AvatarStatus
    extends Pick<CompoKitStatus, "approved" | "declined" | "locked"> {
    [key: string]: string;
}
export interface AvatarProps extends PropsWithChildren {
    appearance: keyof AvatarAppearances;
    label: string;
    borderColour: string;
    href: string;
    isDisabled: boolean;
    name: string;
    presence: keyof AvatarPresence;
    src: string;
    alt: string;
    size: keyof AvatarSizes;
    status: keyof AvatarStatus | ReactNode;
    stackIndex: number;
    tabIndex: number;
    target: React.HTMLAttributeAnchorTarget | undefined;
    onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
    testId: string;
    analyticsContext: Record<string, any>;
}

export const Avatar: FC<AvatarProps> = ({
    appearance = "circle",
    label,
    borderColour,
    children,
    href,
    isDisabled,
    name,
    presence,
    src,
    size = "large",
    status,
    tabIndex,
    target = "_blank",
    onClick,
    testId,
    stackIndex,
    analyticsContext,
}) => {
    const theme = useTheme().theme.avatar;
    const defaultPro = (
        <svg width="128" height="128" viewBox="0 0 24 24" role="presentation">
            <g fill="white" fill-rule="evenodd">
                <path d="M6 14c0-1.105.902-2 2.009-2h7.982c1.11 0 2.009.894 2.009 2.006v4.44c0 3.405-12 3.405-12 0V14z"></path>
                <circle cx="12" cy="7" r="4"></circle>
            </g>
        </svg>
    );

    const avatarImage = (
        <img
            src={src}
            alt={name}
            style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                borderRadius:
                    appearance === "circle" || !theme.appearance[appearance]
                        ? "50%"
                        : "4%",
            }}
        />
    );

    return (
        <div data-testid={testId} tabIndex={tabIndex}>
            {children ? (
                children
            ) : (
                <div
                    aria-label={label}
                    className={classNames(
                        theme.base,
                        theme.appearance[appearance]
                            ? theme.appearance[appearance]
                            : theme.appearance["circle"],
                        theme.sizes[size] ? theme.sizes[size] : theme.default,
                        isDisabled && theme.disabled
                    )}
                    onClick={onClick}
                    style={{
                        border:
                            borderColour?.length > 0
                                ? `3px solid ${borderColour}`
                                : "",
                    }}
                >
                    {src && href ? (
                        <a
                            href={href}
                            target={target}
                            style={{
                                height: "100%",
                                width: "100%",
                            }}
                        >
                            {avatarImage}
                        </a>
                    ) : src ? (
                        <>{avatarImage}</>
                    ) : (
                        defaultPro
                    )}
                </div>
            )}
        </div>
    );
};

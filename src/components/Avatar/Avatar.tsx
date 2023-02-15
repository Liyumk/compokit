import React, { FC, PropsWithChildren, ReactNode } from "react";
import {
    CompoKitStatus,
    CompoKitAppearances,
    CompoKitSizes,
} from "../CompoKit/CompoKitTheme";
import { useTheme } from "../../hooks/useTheme";
import classNames from "classnames";
import { TiLockClosed, TiTick } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";

export interface CompoKitAvatarTheme {
    base: string;
    wrapper: string;
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
    base: string;
    online: AvatarPresenceSize;
    busy: AvatarPresenceSize;
    focus: AvatarPresenceSize;
    offline: AvatarPresenceSize;
}

export interface AvatarPresenceSize
    extends Pick<
        CompoKitSizes,
        "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge"
    > {
    base: string;
    innerBase?: string;
}

export interface AvatarPresenceProps extends Omit<AvatarPresence, "base"> {}

export interface AvatarSizes
    extends Pick<
        CompoKitSizes,
        "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge"
    > {}

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
    presence: keyof AvatarPresenceProps;
    src: string;
    alt: string;
    size: keyof AvatarSizes;
    status: keyof AvatarStatus;
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
    size = "xxlarge",
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
        <div
            data-testid={testId}
            tabIndex={tabIndex}
            className="relative w-fit"
        >
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
            {size !== "xxlarge" &&
                size !== "xsmall" &&
                size !== "small" &&
                (status ? (
                    <div
                        className={classNames(
                            theme.status.base,
                            size === "xlarge" && "top-3 right-1",
                            size === "large" && "top-1 right-0",
                            theme.status[status]
                        )}
                    >
                        <div>
                            {status === "locked" && <TiLockClosed size={12} />}
                            {status === "approved" && (
                                <TiTick size={12} color="white" />
                            )}
                            {status === "declined" && (
                                <AiOutlineClose size={12} color="white" />
                            )}
                        </div>
                    </div>
                ) : (
                    <div
                        className={classNames(
                            presence && theme.presence[presence][size],
                            presence && theme.presence[presence].base,
                            theme.presence.base
                        )}
                    >
                        <div
                            className={classNames(
                                presence === "focus" &&
                                    theme.presence.focus.innerBase,
                                presence === "busy" &&
                                    theme.presence.busy.innerBase,
                                presence === "offline" &&
                                    theme.presence.offline.innerBase
                            )}
                        ></div>
                    </div>
                ))}
        </div>
    );
};

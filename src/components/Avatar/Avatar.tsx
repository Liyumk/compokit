import React from "react";
import {
    avatarAppearance,
    imageSizeInRem,
} from "../../utils/avatarAttributesConverter";
import { MdBorderColor } from "react-icons/md";

export type Appearance = "circle" | "square";
export type Size = "small" | "medium" | "large";

export interface AvatarProps {
    appearance?: Appearance;
    size: Size;
    borderColor?: string;
    src: string;
    alt?: string;
}

const Avatar = (props: AvatarProps) => {
    const {
        appearance = "circle",
        size = "medium",
        src,
        alt,
        borderColor,
    } = props;

    const sizeInRem = imageSizeInRem(size);
    const app = avatarAppearance(appearance);

    return (
        <div>
            <img
                src={src}
                style={{
                    objectFit: "cover",
                    height: sizeInRem + "rem",
                    width: sizeInRem + "rem",
                    borderRadius: app + "%",
                    border: borderColor ? `solid 2px ${borderColor}` : "",
                }}
                alt={alt}
            />
        </div>
    );
};

export default Avatar;

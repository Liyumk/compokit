import React, { FC, ImgHTMLAttributes } from "react";

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    isDark?: boolean;
    srcDark?: string;
}

export const Image: FC<ImageProps> = (props) => {
    const { isDark, srcDark, src } = props;

    return <img {...props} src={isDark && srcDark ? srcDark : src}></img>;
};

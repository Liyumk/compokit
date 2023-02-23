import { FC, ImgHTMLAttributes } from "react";
export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    isDark?: boolean;
    srcDark?: string;
}
export declare const Image: FC<ImageProps>;

/// <reference types="react" />
export type Appearance = "circle" | "square";
export type Size = "small" | "medium" | "large";
export interface AvatarProps {
    appearance?: Appearance;
    size: Size;
    borderColor?: string;
    src: string;
    alt?: string;
}
declare const Avatar: (props: AvatarProps) => JSX.Element;
export default Avatar;

import React, { Children, FC, PropsWithChildren, ReactElement } from "react";
import { CompoKitAppearances } from "../CompoKit/CompoKitTheme";
import classNames from "classnames";
import { useTheme } from "../../hooks/useTheme";

export interface CompoKitBannerTheme {
    base: string;

    appearance: BannerAppearance;
}

export interface BannerAppearance
    extends Pick<CompoKitAppearances, "warning" | "error" | "announcement"> {}

export interface BannerProps extends PropsWithChildren {
    appearance?: keyof BannerAppearance;
    icon?: ReactElement;
    testId?: string;
}

export const Banner: FC<BannerProps> = ({
    appearance = "warning",
    children,
    icon,
    testId,
}) => {
    const theme = useTheme().theme.banner;

    const modifyChildren = (child: any) => {
        const className = classNames(child.props.className, "truncate");
        const props = { className };
        return React.cloneElement(child, props);
    };
    return (
        <div
            data-testid={testId}
            className={classNames(theme.base, theme.appearance[appearance])}
        >
            {icon}
            {Children.map(children, (child) => modifyChildren(child))}
        </div>
    );
};

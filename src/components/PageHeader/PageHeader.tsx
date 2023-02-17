import classNames from "classnames";
import React, { FC, PropsWithChildren, ReactElement } from "react";
import { useTheme } from "../../hooks/useTheme";

export interface CompoKitPageHeaderTheme {
    base: string;
    titleAndAction: string;
    title: PageHeaderTitle;
    action: string;
    bottomBar: string;
}

export interface PageHeaderTitle {
    base: string;
    truncate: string;
}

export interface PageHeaderProps extends PropsWithChildren {
    actions?: ReactElement;
    bottomBar?: ReactElement;
    breadCrumbs?: ReactElement;
    disableTitleStyle?: boolean;
    truncateTitle?: boolean;
    innerRef?: (e: any) => undefined;
    id?: string;
}

export const PageHeader: FC<PageHeaderProps> = ({
    actions,
    bottomBar,
    breadCrumbs,
    children,
    disableTitleStyle,
    truncateTitle,
    innerRef,
    id,
}) => {
    const theme = useTheme().theme.pageHeader;
    return (
        <div className={classNames(theme.base)}>
            <div>{breadCrumbs}</div>
            <div className={classNames(theme.titleAndAction)}>
                <h1
                    className={classNames(
                        !disableTitleStyle && theme.title.base,
                        truncateTitle && theme.title.truncate
                    )}
                    id={id}
                    ref={innerRef}
                >
                    {children}
                </h1>
                <div className={classNames(theme.action)}>{actions}</div>
            </div>
            <div className={classNames(theme.bottomBar)}>{bottomBar}</div>
        </div>
    );
};

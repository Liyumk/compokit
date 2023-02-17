import { FC, PropsWithChildren, ReactElement } from "react";
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
export declare const PageHeader: FC<PageHeaderProps>;

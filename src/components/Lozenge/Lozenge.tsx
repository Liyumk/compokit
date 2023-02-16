import React, {
    CSSProperties,
    Children,
    FC,
    PropsWithChildren,
    ReactElement,
} from "react";
import { CompoKitAppearances } from "../CompoKit/CompoKitTheme";
import classNames from "classnames";
import { useTheme } from "../../hooks/useTheme";

export interface CompoKitLozengeTheme {
    base: string;
    appearance: LozengeAppearance;
    isBoldAppearance: LozengeAppearance;
}

export interface LozengeAppearance
    extends Pick<
        CompoKitAppearances,
        "default" | "inprogress" | "moved" | "new" | "removed" | "success"
    > {}

export interface LozengeStyle
    extends Pick<CSSProperties, "backgroundColor" | "color"> {}

export interface LozengeProps extends PropsWithChildren {
    appearance: keyof LozengeAppearance;
    isBold: boolean;
    maxWidth: number | string;
    style: LozengeStyle;
    testId: string;
}

export const Lozenge: FC<LozengeProps> = ({
    appearance,
    children,
    isBold,
    maxWidth,
    style,
    testId,
}) => {
    const theme = useTheme().theme.lozenge;

    const styles = {
        fontSize: "11px",
        maxWidth: maxWidth,
        ...style,
    };

    return (
        <div
            data-testid={testId}
            style={styles}
            className={classNames(
                theme.base,
                !isBold && theme.appearance[appearance],
                isBold && theme.isBoldAppearance[appearance]
            )}
        >
            {children}
        </div>
    );
};

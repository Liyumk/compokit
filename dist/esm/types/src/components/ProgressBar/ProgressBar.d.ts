/// <reference types="react" />
export interface ProgressBarProps {
    value: number;
    showNumber?: boolean;
}
declare const ProgressBar: ({ value, showNumber }: ProgressBarProps) => JSX.Element;
export default ProgressBar;

/// <reference types="react" />
export interface ProgressBarProps {
    value: number;
    completedColor?: string;
    showNumber?: boolean;
}
declare const ProgressBar: ({ value, completedColor, showNumber, }: ProgressBarProps) => JSX.Element;
export default ProgressBar;

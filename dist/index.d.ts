/// <reference types="react" />
interface ProgressBarProps {
    value: number;
    showNumber?: boolean;
}
declare const ProgressBar: ({ value, showNumber }: ProgressBarProps) => JSX.Element;

export { ProgressBar };

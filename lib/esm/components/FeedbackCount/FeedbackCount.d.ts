import React from 'react';
interface FeedbackCountProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children?: React.ReactNode;
    iconEnabled?: boolean;
    icon?: React.ReactNode;
    iconStyle?: string;
    iconPosition?: "before" | "after";
    text?: string | React.ReactNode;
    textStyle?: string;
    count?: number;
    countStyle?: string;
    countPosition?: "beforeText" | "afterText" | "beforeIcon" | "afterIcon";
}
export declare const FeedbackCount: React.FC<FeedbackCountProps>;
export {};

import React from 'react';
interface DownvoteProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children?: React.ReactNode;
    iconEnabled?: boolean;
    icon?: React.ReactNode;
    iconStyle?: string;
    iconPosition?: "before" | "after";
    text?: string | React.ReactNode;
    textStyle?: string;
}
export declare const Downvote: React.FC<DownvoteProps>;
export {};

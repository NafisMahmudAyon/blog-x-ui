import React from 'react';
interface UpvoteProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children?: React.ReactNode;
    iconEnabled?: boolean;
    icon?: React.ReactNode;
    iconStyle?: string;
    iconPosition?: "before" | "after";
    text?: string | React.ReactNode;
    textStyle?: string;
}
export declare const Upvote: React.FC<UpvoteProps>;
export {};

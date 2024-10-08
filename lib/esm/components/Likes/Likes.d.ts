import React from 'react';
interface LikesProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children?: React.ReactNode;
    iconEnabled?: boolean;
    icon?: React.ReactNode;
    iconStyle?: string;
    text?: string;
    textEnabled?: boolean;
    iconPosition?: "before" | "after";
}
export declare const Likes: React.FC<LikesProps>;
export {};

import React from 'react';
interface ReadMoreProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    link?: string;
    target?: "_blank" | "_self" | "_parent" | "_top";
    text?: string;
    iconEnabled?: boolean;
    icon?: React.ReactNode;
    iconStyle?: string;
    iconPosition?: "before" | "after";
    textEnabled?: boolean;
    className?: string;
    children?: React.ReactNode;
}
export declare const ReadMore: React.FC<ReadMoreProps>;
export {};

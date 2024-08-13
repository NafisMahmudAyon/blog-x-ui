import React from 'react';
interface AuthorProps extends React.HTMLAttributes<HTMLDivElement> {
    type: "avatar" | "name" | "description";
    content?: string;
    contentStyle?: string;
    isLink?: boolean;
    profileLink?: string;
    profileImage?: string;
    avatarStyle?: string;
    iconEnabled?: boolean;
    icon?: React.ReactDOM;
    prefix?: string;
    prefixStyle?: string;
    postfix?: string;
    postfixStyle?: string;
    tagName?: "article" | "span" | "div" | "section" | "a";
    className?: string;
    children?: React.ReactNode;
}
export declare const Author: React.FC<AuthorProps>;
export {};

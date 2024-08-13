import React from 'react';
interface AuthorProps extends React.HTMLAttributes<HTMLDivElement> {
    type: "avatar" | "name" | "description";
    name?: string;
    isLink?: boolean;
    profileLink?: string;
    profileImage?: string;
    avatarStyle?: string;
    iconEnabled?: boolean;
    icon?: React.ReactDOM;
    tagName?: "article" | "span" | "div" | "section" | "a";
    className?: string;
    children?: React.ReactNode;
}
export declare const Author: React.FC<AuthorProps>;
export {};

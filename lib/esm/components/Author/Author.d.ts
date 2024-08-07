import React from 'react';
interface AuthorProps extends React.HTMLAttributes<HTMLDivElement> {
    type: "avatar" | "name" | "description";
    text?: string;
    isLink?: boolean;
    profileLink?: string;
    avatarLink?: string;
    avatarStyle?: string;
    tagName?: "article" | "span" | "div" | "section" | "a";
    className?: string;
    children?: React.ReactNode;
}
export declare const Author: React.FC<AuthorProps>;
export {};

import React from "react";
interface AuthorBioProps extends React.AllHTMLAttributes<HTMLDivElement> {
    tagName?: "article" | "span" | "div" | "section";
    content?: string;
    isLink?: boolean;
    profileLink?: string;
    profileImage?: string;
    iconEnabled?: boolean;
    prefix?: string;
    postfix?: string;
    className?: string;
    children?: React.ReactNode;
}
export declare const AuthorBio: React.FC<AuthorBioProps>;
export {};

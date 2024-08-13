import React from "react";
interface AuthorBioProps extends React.AllHTMLAttributes<HTMLDivElement> {
    tagName?: "article" | "span" | "div" | "section";
    name?: string;
    isLink?: boolean;
    profileLink?: string;
    profileImage?: string;
    className?: string;
    children?: React.ReactNode;
}
export declare const AuthorBio: React.FC<AuthorBioProps>;
export {};

import React from "react";
interface RelatedPostsProps extends React.AllHTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: React.ReactNode;
    posts?: string[] | object[];
}
export declare const RelatedPosts: React.FC<RelatedPostsProps>;
export {};

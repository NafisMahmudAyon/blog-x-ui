import React from 'react';
interface MetaInfoProps extends React.HTMLAttributes<HTMLDivElement> {
    count?: number;
    countPosition?: "before" | "after";
    type?: "readTime" | "viewsCount" | "commentCount" | "shareCount";
    readTime?: string;
    viewsCount?: number;
    commentsCount?: number;
    shareCount?: number;
    className?: string;
    children?: React.ReactNode;
    countStyle?: string;
    textStyle?: string;
    text?: string;
}
export declare const MetaInfo: React.FC<MetaInfoProps>;
export default MetaInfo;

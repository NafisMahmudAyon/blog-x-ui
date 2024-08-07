import React from 'react';
interface UpvotesProps extends React.AllHTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: React.ReactNode;
    upvoteStyle?: string;
    iconStyle?: string;
    count?: number;
    countStyle?: string;
    separator?: string | React.ReactNode;
    separatorStyle?: string;
}
export declare const Upvotes: React.FC<UpvotesProps>;
export {};

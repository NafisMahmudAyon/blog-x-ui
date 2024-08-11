import React from 'react';
interface CategoryProps extends React.AllHTMLAttributes<HTMLDivElement> {
    categories?: string | string[];
    tagName?: "div" | "section";
    className?: string;
    isLink?: boolean;
    link?: string;
    categoryItemStyle?: string;
    children?: React.ReactNode;
}
export declare const Category: React.FC<CategoryProps>;
export default Category;

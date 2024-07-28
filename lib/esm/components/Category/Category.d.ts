import React from 'react';
interface CategoryProps extends React.AllHTMLAttributes<HTMLDivElement> {
    categories?: string | string[];
    categoryName?: "div" | "section";
    className?: string;
    categoryItemStyle?: string;
    children?: React.ReactNode;
}
export declare const Category: React.FC<CategoryProps>;
export default Category;

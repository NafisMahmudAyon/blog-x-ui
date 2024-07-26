import React from 'react';
interface TitleProps extends React.AllHTMLAttributes<HTMLElement> {
    tagName: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    className?: string;
    children: React.ReactNode;
    link?: string;
    linkStyle?: string;
}
export declare const Title: React.FC<TitleProps>;
export default Title;

interface TitleProps extends React.AllHTMLAttributes<HTMLHeadingElement> {
    tagName?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    className?: string;
    title?: string;
    isLink?: boolean;
    link?: string;
    children?: React.ReactNode;
}
export declare const Title: React.FC<TitleProps>;
export {};

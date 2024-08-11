interface ExcerptProps extends React.AllHTMLAttributes<HTMLElement> {
    tagName?: "p" | "span" | "div" | "section";
    className?: string;
    children: React.ReactNode;
    limit?: number;
    limitBy?: "word" | "character";
}
export declare const Excerpt: React.FC<ExcerptProps>;
export {};

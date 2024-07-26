interface ContentProps extends React.AllHTMLAttributes<HTMLParagraphElement> {
    tagName?: "p" | "span" | "div" | "section";
    className?: string;
    children: React.ReactNode;
}
export declare const Content: React.FC<ContentProps>;
export {};

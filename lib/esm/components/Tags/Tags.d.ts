interface TagsProps extends React.AllHTMLAttributes<HTMLDivElement> {
    tags?: string | string[];
    tagName?: "div" | "section";
    className?: string;
    tagItemStyle?: string;
    children?: React.ReactNode;
}
export declare const Tags: React.FC<TagsProps>;
export {};

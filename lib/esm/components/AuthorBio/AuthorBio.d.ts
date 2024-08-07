interface AuthorBioProps extends React.AllHTMLAttributes<HTMLDivElement> {
    tagName?: "article" | "span" | "div" | "section";
    className?: string;
    children?: React.ReactNode;
}
export declare const AuthorBio: React.FC<AuthorBioProps>;
export {};

interface FeaturedImageProps extends React.AllHTMLAttributes<HTMLImageElement> {
    className?: string;
    src?: string;
    caption?: string;
    lazyLoad?: boolean;
    imageStyle?: string;
    captionStyle?: string;
}
export declare const FeaturedImage: React.FC<FeaturedImageProps>;
export {};

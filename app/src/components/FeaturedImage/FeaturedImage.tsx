interface FeaturedImageProps extends React.AllHTMLAttributes<HTMLImageElement> {
  className?: string;
  src?: string;
}

export const FeaturedImage: React.FC<FeaturedImageProps> = ({ className = '', src, ...rest }) => {
  return (
    <img src={src} className={`${className}`} {...rest} />
  );
};



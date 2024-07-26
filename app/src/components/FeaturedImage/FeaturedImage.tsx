interface FeaturedImageProps extends React.HTMLAttributes<HTMLImageElement> {
  className?: string;

}

export const FeaturedImage: React.FC<FeaturedImageProps> = ({ className = '', ...rest }) => {
  return (
    <img src="" alt="" className={`${className}`} {...rest} />
  );
};



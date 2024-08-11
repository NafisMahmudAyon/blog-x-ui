interface FeaturedImageProps extends React.AllHTMLAttributes<HTMLImageElement> {
  className?: string;
  src?: string;
  caption?: string;
  lazyLoad?: boolean;
  imageStyle?: string;
  captionStyle?: string;
}

export const FeaturedImage: React.FC<FeaturedImageProps> = ({ className = '', src, caption, lazyLoad, imageStyle = "", captionStyle = "", ...rest }) => {
  return (
    <>
      {caption &&
        <figure className={`${className}`} {...rest}>
          <img src={src} className={`${imageStyle}`} />
          <figcaption className={`${captionStyle}`}>{caption}</figcaption>
        </figure>
      }
      {!caption &&
        <img src={src} className={`${className}`} {...rest} />
      }
    </>
  );
};



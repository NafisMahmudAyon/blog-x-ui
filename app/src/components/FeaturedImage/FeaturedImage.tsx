

interface FeaturedImageProps extends React.AllHTMLAttributes<HTMLElement> {
  className?: string;
  link?: string;
  linkStyle?: string;
}

export const FeaturedImage: React.FC<FeaturedImageProps> = ({ className = '', children, link, linkStyle = '', ...rest }) => {
  // const Tag = tagName as keyof JSX.IntrinsicElements;
  // let tag: FeaturedImageProps["tagName"] = useState(tagName);
  // const Tag: FeaturedImageProps["tagName"] = tagName;


  if (link) {
    // Extract attributes specific to <a> tag
    // const { href, ...anchorProps } = rest;

    return (
      <a href={link} className={linkStyle} {...rest}>
        <img src="" alt="" />
      </a>
    );
  }

  // For heading tags, apply all remaining props
  return (
    <Tag className={className} {...rest}>
      {children}
    </Tag>
  );
};



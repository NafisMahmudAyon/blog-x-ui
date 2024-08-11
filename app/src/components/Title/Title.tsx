interface TitleProps extends React.AllHTMLAttributes<HTMLHeadingElement>{
  tagName?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  title?: string;
  isLink?: boolean;
  link?: string;
  children?: React.ReactNode;
  
}

export const Title: React.FC<TitleProps> = ({ tagName = 'h2', className = '', title, isLink, link, children, ...rest }) => {
  const Tag: TitleProps["tagName"] = tagName;
  return (
    <Tag className={className} {...rest}>
      {children ? children : <>
      {(isLink && link) ? <a href={link}>{title}</a> : title }
      </>}
    </Tag>
  );
};

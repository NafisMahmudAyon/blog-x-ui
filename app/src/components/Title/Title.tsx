interface TitleProps extends React.AllHTMLAttributes<HTMLHeadingElement>{
  tagName: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  children: React.ReactNode;
  
}

export const Title: React.FC<TitleProps> = ({ tagName = 'h1', className = '', children, ...rest }) => {
  const Tag: TitleProps["tagName"] = tagName;
  return (
    <Tag className={className} {...rest}>
      {children}
    </Tag>
  );
};

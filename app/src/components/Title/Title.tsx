import React from 'react';

interface TitleProps extends React.AllHTMLAttributes<HTMLElement>{
  tagName: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  children: React.ReactNode;
  link?: string;
  linkStyle?: string;
}

export const Title: React.FC<TitleProps> = ({ tagName = 'h1', className = '', children, link, linkStyle = '', ...rest }) => {
  // const Tag = tagName as keyof JSX.IntrinsicElements;
  // let tag: TitleProps["tagName"] = useState(tagName);
  const Tag: TitleProps["tagName"] = tagName;
  

  if (link) {
    // Extract attributes specific to <a> tag
    // const { href, ...anchorProps } = rest;

    return (
      <a href={link} className={linkStyle} {...rest}>
        <Tag className={className}>
          {children}
        </Tag>
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

export default Title;

interface ContentProps extends React.AllHTMLAttributes<HTMLParagraphElement>{
  tagName?: "p" | "span" | "div" | "section";
  className?: string;
  children: React.ReactNode;
}

export const Content: React.FC<ContentProps> = ({tagName="p", className="", children, ...rest }) => {
  const Tag: ContentProps["tagName"] = tagName;

  return (
    <Tag className={`${className}`} {...rest}>{children}</Tag>
  )
}

interface TagsProps extends React.AllHTMLAttributes<HTMLDivElement> {
  tags?: string | string[];
  tagName?: "div" | "section";
  className?: string;
  tagItemStyle?: string;
  children?: React.ReactNode;
}

export const Tags: React.FC<TagsProps> = ({ tags, tagItemStyle, className="", children, tagName="div", ...rest }) => {
  const Tag: TagsProps["tagName"] = tagName;

  return (
    <Tag {...rest}>
      {children && children}
      {!children && "Hello"}
    </Tag>
  )
}

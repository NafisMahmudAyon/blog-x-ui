interface TagsProps extends React.AllHTMLAttributes<HTMLDivElement> {
  tags?: string | string[];
  tagName?: "div" | "section";
  className?: string;
  tagItemStyle?: string;
  children?: React.ReactNode;
}

export const Tags: React.FC<TagsProps> = ({ tags="", tagItemStyle="", className="", children, tagName="div", ...rest }) => {
  const Tag: TagsProps["tagName"] = tagName;
  return (
    <Tag className={`${className} `} {...rest}>
      {children && children}
      {!children && 
        <>
          {typeof tags == "object" && tags.map((tag,i) => {
            return <span key={i} className={`${tagItemStyle}`}>{tag}</span>;
          })}
          {typeof tags == "string" && <span  className={`${tagItemStyle}`}>{tags}</span>
          }
        </>
      }
    </Tag>
  )
}

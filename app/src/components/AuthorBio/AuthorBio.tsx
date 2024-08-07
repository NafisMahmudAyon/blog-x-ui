interface AuthorBioProps extends React.AllHTMLAttributes<HTMLDivElement> {
  tagName?: "article" | "span" | "div" | "section";
  className?: string;
  children?: React.ReactNode;
}

export const AuthorBio:React.FC<AuthorBioProps> = ({ 
  tagName = "div",
  children, 
  className = "",
  ...rest
}) => {
  const Tag: AuthorBioProps["tagName"] = tagName;

  return (
    <Tag className={`${className}`} {...rest}>
      {children}
    </Tag>
  )
}

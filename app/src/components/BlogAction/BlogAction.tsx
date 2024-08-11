interface BlogActionProps extends React.AllHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  children?: React.ReactNode;
  link?: string;
}
export const BlogAction: React.FC<BlogActionProps> = ({ className="", link="#", children, ...rest }) => {
  return (
    <a href={link} className={`${className}`} {...rest} >{children}</a>
  )
}

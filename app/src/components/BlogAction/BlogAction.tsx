interface BlogActionProps extends React.AllHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  children?: React.ReactNode;
  href?: string;
}
export const BlogAction: React.FC<BlogActionProps> = ({ className="", href="#", children, ...rest }) => {
  return (
    <a href={href} className={`${className}`} {...rest} >{children}</a>
  )
}

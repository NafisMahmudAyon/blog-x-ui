

interface BlogProps extends React.AllHTMLAttributes<HTMLDivElement> {

}

export const Blog: React.FC<BlogProps> = ({ className = "", children, ...rest }) => {
  return (
    <article className={`${className}`} {...rest}>{children}</article>
  )
}



interface BlogProps extends React.AllHTMLAttributes<HTMLDivElement> {
className?: string;
children?: React.ReactNode;
}

export const Blog: React.FC<BlogProps> = ({ className = "", children, ...rest }) => {
  return (
    <article className={`${className}`} {...rest}>{children}</article>
  )
}

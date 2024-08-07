interface SocialShareProps extends React.AllHTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode
}

export const SocialShare: React.FC<SocialShareProps> = ({className="", children, ...rest}) => {
  return (
    <div className={`${className}`} {...rest}>{children}</div>
  )
}

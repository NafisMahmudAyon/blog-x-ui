import React from 'react'

interface RelatedPostProps extends React.AllHTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

export const RelatedPost: React.FC<RelatedPostProps> = ({
  className = "",
  children,
  ...rest
}) => {
  return (
    <div className={`${className}`} {...rest}>{children}</div>
  )
}

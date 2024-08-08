import React from "react";
import { RelatedPost } from "./RelatedPost";

interface RelatedPostsProps extends React.AllHTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  posts?: string[] | object[];
}

export const RelatedPosts: React.FC<RelatedPostsProps> = ({
  className = "",
  children,
  posts,
 ...rest
}) => {

  return (
    <div className={`${className}`} {...rest}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === RelatedPost) {
          return React.cloneElement(child);
        }
        return null;
      })}
    </div>
  )
}

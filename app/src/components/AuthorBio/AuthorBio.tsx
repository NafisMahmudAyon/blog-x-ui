import React from "react";
import { Author } from "../Author/Author";

interface AuthorBioProps extends React.AllHTMLAttributes<HTMLDivElement> {
  tagName?: "article" | "span" | "div" | "section";
  name?: string;
  isLink?: boolean;
  profileLink?: string;
  profileImage?: string;
  className?: string;
  children?: React.ReactNode;
}


export const AuthorBio:React.FC<AuthorBioProps> = ({ 
  tagName = "div",
  name,
  isLink,
  profileLink,
  profileImage,
  children, 
  className = "",
  ...rest
}) => {
  const Tag: AuthorBioProps["tagName"] = tagName;

  type AuthorProps = {
    name?: string;
    isLink?: boolean;
    profileLink?: string;
    profileImage?: string;
  }
  
  const authorProps: AuthorProps = {
    name: name,
    isLink: isLink,
    profileLink: profileLink,
    profileImage: profileImage,
  }

  return (
    <Tag className={`${className}`} {...rest}>
      {/* {children} */}
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === Author) {
          return React.cloneElement(child, { ...authorProps, ...child.props });
        }
        return child;
      })}
    </Tag>
  )
}

import React from "react";
import { Author } from "../Author/Author";

interface AuthorBioProps extends React.AllHTMLAttributes<HTMLDivElement> {
  tagName?: "article" | "span" | "div" | "section";
  content?: string;
  isLink?: boolean;
  profileLink?: string;
  profileImage?: string;
  iconEnabled?: boolean;
  prefix?: string;
  postfix?: string;
  className?: string;
  children?: React.ReactNode;
}


export const AuthorBio:React.FC<AuthorBioProps> = ({ 
  tagName = "div",
  content,
  isLink,
  profileLink,
  profileImage,
  iconEnabled,
  prefix,
  postfix,
  children, 
  className = "",
  ...rest
}) => {
  const Tag: AuthorBioProps["tagName"] = tagName;

  type AuthorProps = {
    content?: string;
    isLink?: boolean;
    profileLink?: string;
    profileImage?: string;
    iconEnabled?: boolean;
    prefix?: string;
    postfix?: string;
  }
  
  const authorProps: AuthorProps = {
    content: content,
    isLink: isLink,
    profileLink: profileLink,
    profileImage: profileImage,
    iconEnabled: iconEnabled,
    prefix: prefix,
    postfix: postfix,
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

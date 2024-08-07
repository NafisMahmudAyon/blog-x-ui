import React from 'react';
import { Avatar } from "../Icon";

interface AuthorProps extends React.HTMLAttributes<HTMLDivElement> {
  type: "avatar" | "name" | "description";
  text?: string;
  isLink?: boolean;
  profileLink?: string;
  avatarLink?: string;
  avatarStyle?: string;
  tagName?: "article" | "span" | "div" | "section" | "a";
  className?: string;
  children?: React.ReactNode;
}

export const Author: React.FC<AuthorProps> = ({
  type = "avatar",
  text,
  isLink,
  profileLink,
  avatarLink,
  avatarStyle = "",
  tagName = "div",
  className = "",
  children,
  ...rest
}) => {
  const Tag: React.ElementType = isLink && profileLink ? 'a' : tagName;

  // Create a combined props object with the correct type
  const combinedProps = {
    className,
    ...rest,
    ...(isLink && profileLink ? { href: profileLink } : {})
  };

  return (
    <Tag {...combinedProps as React.HTMLAttributes<HTMLElement>}>
      {type === "avatar" && (
        <>
          {avatarLink ? (
            <img className={avatarStyle} src={avatarLink} alt={text || "Avatar"} />
          ) : (
            <Avatar className={avatarStyle} />
          )}
        </>
      )}
      {(type === "name" || type === "description") && text}
      {children}
    </Tag>
  );
};

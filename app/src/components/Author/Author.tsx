import React from 'react';
import { Avatar } from "../Icon";

interface AuthorProps extends React.HTMLAttributes<HTMLDivElement> {
  type: "avatar" | "name" | "description";
  name?: string;
  isLink?: boolean;
  profileLink?: string;
  profileImage?: string;
  avatarStyle?: string;
  iconEnabled?: boolean;
  icon?: React.ReactDOM;
  tagName?: "article" | "span" | "div" | "section" | "a";
  className?: string;
  children?: React.ReactNode;
}

export const Author: React.FC<AuthorProps> = ({
  type = "avatar",
  name,
  isLink,
  profileLink,
  profileImage,
  avatarStyle = "",
  iconEnabled = false,
  icon,
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
    ...((isLink && profileLink) ? { href: profileLink } : {})
  };

  return (
    <Tag {...combinedProps as React.HTMLAttributes<HTMLElement>}>
      {type === "avatar" && (
        <>
          {profileImage && (
            <img className={avatarStyle} src={profileImage} alt={name || "Avatar"} />
          )}
          {iconEnabled && !profileImage && (
            <>
              {icon ? icon :
                <Avatar className={avatarStyle} />
              }
            </>
          )}

        </>
      )}
      {(type === "name" || type === "description") && name}
    </Tag>
  );
};

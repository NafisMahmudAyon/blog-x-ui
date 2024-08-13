import React from 'react';
import { Avatar } from "../Icon";

interface AuthorProps extends React.HTMLAttributes<HTMLDivElement> {
  type: "avatar" | "name" | "description";
  content?: string;
  contentStyle?: string;
  isLink?: boolean;
  profileLink?: string;
  profileImage?: string;
  avatarStyle?: string;
  iconEnabled?: boolean;
  icon?: React.ReactDOM;
  prefix?: string;
  prefixStyle?: string;
  postfix?: string;
  postfixStyle?: string;
  tagName?: "article" | "span" | "div" | "section" | "a";
  className?: string;
  children?: React.ReactNode;
}

export const Author: React.FC<AuthorProps> = ({
  type = "avatar",
  content,
  contentStyle = "",
  isLink,
  profileLink,
  profileImage,
  avatarStyle = "",
  iconEnabled = false,
  icon,
  prefix,
  prefixStyle = "",
  postfix,
  postfixStyle = "",
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
            <img className={avatarStyle} src={profileImage} alt={content || "Avatar"} />
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
      {(type === "name" || type === "description") && (
        <>
          {prefix && <span className={`${prefixStyle}`}>{prefix}</span>}
          <span className={`${contentStyle}`}>{content}</span>
          {postfix && <span className={`${postfixStyle}`}>{postfix}</span>}
        </>)}
    </Tag>
  );
};

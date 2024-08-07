import React from 'react';
import { formatNumber } from '../utils/FormatNumber';

interface MetaInfoProps extends React.HTMLAttributes<HTMLDivElement> {
  count?: number;
  countPosition?: "before" | "after";
  type?: "readTime" | "viewsCount" | "commentCount" | "shareCount";
  readTime?: string;
  viewsCount?: number;
  commentsCount?: number;
  shareCount?: number;
  className?: string;
  children?: React.ReactNode;
  countStyle?: string;
  textStyle?: string;
  text?: string;
}

export const MetaInfo: React.FC<MetaInfoProps> = ({
  count,
  countPosition = "before",
  type,
  readTime,
  viewsCount,
  commentsCount,
  shareCount,
  className = "",
  children,
  text,
  countStyle = "",
  textStyle = "",
  ...rest
}) => {
  const getDefaultText = () => {
    switch (type) {
      case 'readTime':
        return "min read";
      case 'viewsCount':
        return 'views';
      case 'commentCount':
        return 'comments';
      case 'shareCount':
        return 'shares';
      default:
        return '';
    }
  };

  return (
    <div className={`${className}`} {...rest}>
      {children && children}
      {!children && (
        <>
          {count !== undefined && countPosition === "before" && (
            <span className={`${countStyle}`}>
              {type === "readTime" && count}
              {(type === "viewsCount" || type === "commentCount" || type === "shareCount") && formatNumber(count)}
            </span>
          )}{" "}
          <span className={`${textStyle}`}>
            {text ? text : ` ${getDefaultText()}`}
          </span>
          {count !== undefined && countPosition === "after" && (
            <span className={`${countStyle}`}>
              {type === "readTime" && count}
              {(type === "viewsCount" || type === "commentCount" || type === "shareCount") && formatNumber(count)}
            </span>
          )}
        </>
      )}
    </div>
  );
};

export default MetaInfo;

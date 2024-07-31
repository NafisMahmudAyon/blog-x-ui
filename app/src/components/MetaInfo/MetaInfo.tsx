import React from 'react';

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

const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num % 1000000 === 0) ? (num / 1000000).toFixed(0) + 'M' : (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num % 1000 === 0) ? (num / 1000).toFixed(0) + 'k' : (num / 1000).toFixed(1) + 'k';
  }
  return num.toString();
};

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

import React from 'react'
import { Comment } from '../Icon';
import { formatNumber } from '../utils/FormatNumber';

interface FeedbackCountProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  iconEnabled?: boolean;
  icon?: React.ReactNode;
  iconStyle?: string;
  iconPosition?: "before" | "after";
  text?: string | React.ReactNode;
  textStyle?: string;
  count?: number;
  countStyle?: string;
  countPosition?: "beforeText" | "afterText" | "beforeIcon" | "afterIcon";
}

export const FeedbackCount: React.FC<FeedbackCountProps> = ({ className = "", iconEnabled = true, icon, iconStyle = "", iconPosition = "before", text, textStyle = "", count = 0, countStyle = "", countPosition = "afterIcon", children, ...rest }) => {
  return (
    <button className={`${className}`} {...rest}>
      {children && children}
      {!children && (<>
        {iconEnabled && iconPosition === "before" && (<>
          {count !== 0 && countPosition === "beforeIcon" &&
            <span className={countStyle}>{formatNumber(count)}</span>
          }
          <span className={`${iconStyle}`}>
            {icon ? icon : <Comment />}
          </span>
          {count !== 0 && countPosition === "afterIcon" &&
            <span className={countStyle}>{formatNumber(count)}</span>
          }
        </>)}
        {count !== 0 && countPosition === "beforeText" &&
          <span className={countStyle}>{formatNumber(count)}</span>
        }
        {text && <span className={`${textStyle}`}>{text}</span>}
        {count !== 0 && countPosition === "afterText" &&
          <span className={countStyle}>{formatNumber(count)}</span>
        }
        {iconEnabled && iconPosition === "after" && (<>
          {count !== 0 && countPosition === "beforeIcon" &&
            <span className={countStyle}>{formatNumber(count)}</span>
          }
          <span className={`${iconStyle}`}>
            {icon ? icon : <Comment />}
          </span>
          {count !== 0 && countPosition === "afterIcon" &&
            <span className={countStyle}>{formatNumber(count)}</span>
          }
        </>)}
      </>)}
    </button>
  )
}

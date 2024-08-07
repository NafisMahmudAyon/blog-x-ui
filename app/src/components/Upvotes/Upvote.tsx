import React from 'react'
import { UpvoteIcon } from '../Icon';

interface UpvoteProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  iconEnabled?: boolean;
  icon?: React.ReactNode;
  iconStyle?: string;
  iconPosition?: "before" | "after";
  text?: string | React.ReactNode;
  textStyle?: string;
}

export const Upvote: React.FC<UpvoteProps> = ({ className = "", iconEnabled = true, icon, iconStyle = "", iconPosition = "before", text, textStyle = "", children, ...rest }) => {
  return (
    <button className={`${className}`} {...rest}>
      {children && children}
      {!children && (<>
        {iconEnabled && iconPosition === "before" && <span className={`${iconStyle}`}>
          {icon ? icon : <UpvoteIcon />}
        </span>}
        {text && <span className={`${textStyle}`}>{text}</span>}
        {iconEnabled && iconPosition === "after" && <span className={`${iconStyle}`}>
          {icon ? icon : <UpvoteIcon />}
        </span>}
      </>)}
    </button>
  )
}

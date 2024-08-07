import React from 'react'
import { DownvoteIcon } from '../Icon';

interface DownvoteProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  iconEnabled?: boolean;
  icon?: React.ReactNode;
  iconStyle?: string;
  iconPosition?: "before" | "after";
  text?: string | React.ReactNode;
  textStyle?: string;
}

export const Downvote: React.FC<DownvoteProps> = ({ className = "", iconEnabled = true, icon, iconStyle = "", iconPosition = "before", text, textStyle = "", children, ...rest }) => {
  return (
    <button className={`${className}`} {...rest}>
      {children && children}
      {!children && (<>
        {iconEnabled && iconPosition === "before" && <span className={`${iconStyle}`}>
          {icon ? icon : <DownvoteIcon />}
        </span>}
        {text && <span className={`${textStyle}`}>{text}</span>}
        {iconEnabled && iconPosition === "after" && <span className={`${iconStyle}`}>
          {icon ? icon : <DownvoteIcon />}
        </span>}
      </>)}
    </button>
  )
}

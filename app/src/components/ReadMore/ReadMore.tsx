'use client'
import React from 'react'
import { ReadMoreIcon } from '../Icon';

interface ReadMoreProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  link?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  text?: string;
  iconEnabled?: boolean;
  icon?: React.ReactNode;
  iconStyle?: string;
  iconPosition?: "before" | "after";
  textEnabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const ReadMore: React.FC<ReadMoreProps> = ({ link = "#", target="_blank", text="Read More", className = "", icon,
  iconEnabled = false,
  iconPosition = "before",
  iconStyle = "", textEnabled = true, children, ...rest }) => {
  const handleClick = () => {
    window.open(link, target);
  }
  return (
    <button className={`${className}`} {...rest} onClick={handleClick}>
      {children && children}
      {!children && (<>
        {(iconEnabled && iconPosition === "before") && (<>{icon ? icon : <ReadMoreIcon className={`${iconStyle}`} />}</>)}
        {textEnabled && text}
        {(iconEnabled && iconPosition === "after") && (<>{icon ? icon : <ReadMoreIcon className={`${iconStyle}`} />}</>)}
      </>)}
    </button>
  )
}

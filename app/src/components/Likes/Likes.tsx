import React from 'react';
import { Like } from '../Icon';

interface LikesProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  iconEnabled?: boolean;
  icon?: React.ReactNode;
  iconStyle?: string;
  text?: string;
  textEnabled?: boolean;
  iconPosition?: "before" | "after";
}

export const Likes: React.FC<LikesProps> = ({
  className = '',
  children,
  icon,
  iconEnabled = true,
  iconPosition = "before",
  iconStyle = "",
  text,
  textEnabled = true,
  ...rest
}) => {

  return (
    <button className={className} {...rest}>
      {children && children}
      {!children && (<>
        {(iconEnabled && iconPosition === "before") && (<>{icon ? icon : <Like className={`${iconStyle}`} />}</>)}
        {textEnabled && text}
        {(iconEnabled && iconPosition === "after") && (<>{icon ? icon : <Like className={`${iconStyle}`} />}</>)}
      </>)}
    </button>
  );
};


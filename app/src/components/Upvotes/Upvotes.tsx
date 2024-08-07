import React from 'react';
import { formatNumber } from '../utils/FormatNumber';
import { Upvote } from './Upvote';
import { Downvote } from './Downvote';

interface UpvotesProps extends React.AllHTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  upvoteStyle?: string;
  iconStyle?: string;
  count?: number;
  countStyle?: string;
  separator?: string | React.ReactNode;
  separatorStyle?: string;
}


export const Upvotes: React.FC<UpvotesProps> = ({
  className = '',
  children,
  iconStyle = "",
  upvoteStyle = "",
  count = 0,
  separator = " | ",
  countStyle = "",
  separatorStyle = "",
  ...rest
}) => {

  return (
    <div className={className} {...rest}>
      <span className={`${upvoteStyle}`}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === Upvote) {
            return React.cloneElement(child);
          }
          return null;
        })}
        {count !== 0 &&
          <span className={countStyle}>{formatNumber(count)}</span>
        }
      </span>
      {separator && <span className={separatorStyle}>{separator}</span>}
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === Downvote) {
          return React.cloneElement(child);
        }
        return null;
      })}

    </div>
  );
};


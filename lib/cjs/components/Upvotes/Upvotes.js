import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { formatNumber } from '../utils/FormatNumber';
import { Upvote } from './Upvote';
import { Downvote } from './Downvote';
export const Upvotes = ({ className = '', children, iconStyle = "", upvoteStyle = "", count = 0, separator = " | ", countStyle = "", separatorStyle = "", ...rest }) => {
    return (_jsxs("div", { className: className, ...rest, children: [_jsxs("span", { className: `${upvoteStyle}`, children: [React.Children.map(children, (child) => {
                        if (React.isValidElement(child) && child.type === Upvote) {
                            return React.cloneElement(child);
                        }
                        return null;
                    }), count !== 0 &&
                        _jsx("span", { className: countStyle, children: formatNumber(count) })] }), separator && _jsx("span", { className: separatorStyle, children: separator }), React.Children.map(children, (child) => {
                if (React.isValidElement(child) && child.type === Downvote) {
                    return React.cloneElement(child);
                }
                return null;
            })] }));
};

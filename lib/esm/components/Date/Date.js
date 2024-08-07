'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { formatDate } from '../utils/formatDate';
export const Date = ({ date, formatString, className = '', ...rest }) => {
    const formattedDate = formatDate(date, formatString);
    return (_jsx("div", { className: className, ...rest, children: formattedDate }));
};

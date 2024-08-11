'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { formatDate } from '../utils/formatDate';
import { DateIcon } from '../Icon';
export const Date = ({ date, formatString = "MMMM D, YYYY", className = '', iconEnabled, icon, iconPosition = "before", iconStyle = "", ...rest }) => {
    const formattedDate = formatDate(date, formatString);
    return (_jsxs("div", { className: className, ...rest, children: [(iconEnabled && iconPosition === "before") && _jsx(_Fragment, { children: icon ? icon : _jsx(DateIcon, {}) }), formattedDate, (iconEnabled && iconPosition === "after") && _jsx(_Fragment, { children: icon ? icon : _jsx(DateIcon, {}) })] }));
};

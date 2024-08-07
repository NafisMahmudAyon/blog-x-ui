import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { UpvoteIcon } from '../Icon';
export const Upvote = ({ className = "", iconEnabled = true, icon, iconStyle = "", iconPosition = "before", text, textStyle = "", children, ...rest }) => {
    return (_jsxs("button", { className: `${className}`, ...rest, children: [children && children, !children && (_jsxs(_Fragment, { children: [iconEnabled && iconPosition === "before" && _jsx("span", { className: `${iconStyle}`, children: icon ? icon : _jsx(UpvoteIcon, {}) }), text && _jsx("span", { className: `${textStyle}`, children: text }), iconEnabled && iconPosition === "after" && _jsx("span", { className: `${iconStyle}`, children: icon ? icon : _jsx(UpvoteIcon, {}) })] }))] }));
};

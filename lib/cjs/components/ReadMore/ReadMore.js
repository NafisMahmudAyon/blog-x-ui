'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { ReadMoreIcon } from '../Icon';
export const ReadMore = ({ link = "#", target = "_blank", text = "Read More", className = "", icon, iconEnabled = false, iconPosition = "before", iconStyle = "", textEnabled = true, children, ...rest }) => {
    const handleClick = () => {
        window.open(link, target);
    };
    return (_jsxs("button", { className: `${className}`, ...rest, onClick: handleClick, children: [children && children, !children && (_jsxs(_Fragment, { children: [(iconEnabled && iconPosition === "before") && (_jsx(_Fragment, { children: icon ? icon : _jsx(ReadMoreIcon, { className: `${iconStyle}` }) })), textEnabled && text, (iconEnabled && iconPosition === "after") && (_jsx(_Fragment, { children: icon ? icon : _jsx(ReadMoreIcon, { className: `${iconStyle}` }) }))] }))] }));
};

import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Like } from '../Icon';
export const Likes = ({ className = '', children, icon, iconEnabled = true, iconPosition = "before", iconStyle = "", text, textEnabled = true, ...rest }) => {
    return (_jsxs("button", { className: className, ...rest, children: [children && children, !children && (_jsxs(_Fragment, { children: [(iconEnabled && iconPosition === "before") && (_jsx(_Fragment, { children: icon ? icon : _jsx(Like, { className: `${iconStyle}` }) })), textEnabled && text, (iconEnabled && iconPosition === "after") && (_jsx(_Fragment, { children: icon ? icon : _jsx(Like, { className: `${iconStyle}` }) }))] }))] }));
};

import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Comment } from '../Icon';
import { formatNumber } from '../utils/FormatNumber';
export const FeedbackCount = ({ className = "", iconEnabled = true, icon, iconStyle = "", iconPosition = "before", text, textStyle = "", count = 0, countStyle = "", countPosition = "afterIcon", children, ...rest }) => {
    return (_jsxs("button", { className: `${className}`, ...rest, children: [children && children, !children && (_jsxs(_Fragment, { children: [iconEnabled && iconPosition === "before" && (_jsxs(_Fragment, { children: [count !== 0 && countPosition === "beforeIcon" &&
                                _jsx("span", { className: countStyle, children: formatNumber(count) }), _jsx("span", { className: `${iconStyle}`, children: icon ? icon : _jsx(Comment, {}) }), count !== 0 && countPosition === "afterIcon" &&
                                _jsx("span", { className: countStyle, children: formatNumber(count) })] })), count !== 0 && countPosition === "beforeText" &&
                        _jsx("span", { className: countStyle, children: formatNumber(count) }), text && _jsx("span", { className: `${textStyle}`, children: text }), count !== 0 && countPosition === "afterText" &&
                        _jsx("span", { className: countStyle, children: formatNumber(count) }), iconEnabled && iconPosition === "after" && (_jsxs(_Fragment, { children: [count !== 0 && countPosition === "beforeIcon" &&
                                _jsx("span", { className: countStyle, children: formatNumber(count) }), _jsx("span", { className: `${iconStyle}`, children: icon ? icon : _jsx(Comment, {}) }), count !== 0 && countPosition === "afterIcon" &&
                                _jsx("span", { className: countStyle, children: formatNumber(count) })] }))] }))] }));
};

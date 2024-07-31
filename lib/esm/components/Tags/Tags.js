import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
export const Tags = ({ tags = "", tagItemStyle = "", className = "", children, tagName = "div", ...rest }) => {
    const Tag = tagName;
    return (_jsxs(Tag, { className: `${className} `, ...rest, children: [children && children, !children &&
                _jsxs(_Fragment, { children: [typeof tags == "object" && tags.map((tag, i) => {
                            return _jsx("span", { className: `${tagItemStyle}`, children: tag }, i);
                        }), typeof tags == "string" && _jsx("span", { className: `${tagItemStyle}`, children: tags })] })] }));
};

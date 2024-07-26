import { jsxs as _jsxs } from "react/jsx-runtime";
export const Tags = ({ tags, tagItemStyle, className = "", children, tagName = "div", ...rest }) => {
    const Tag = tagName;
    return (_jsxs(Tag, { ...rest, children: [children && children, !children && "Hello"] }));
};

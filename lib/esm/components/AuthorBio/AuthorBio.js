import { jsx as _jsx } from "react/jsx-runtime";
export const AuthorBio = ({ tagName = "div", children, className = "", ...rest }) => {
    const Tag = tagName;
    return (_jsx(Tag, { className: `${className}`, ...rest, children: children }));
};

import { jsx as _jsx } from "react/jsx-runtime";
export const Content = ({ tagName = "p", className = "", children, ...rest }) => {
    const Tag = tagName;
    return (_jsx(Tag, { className: `${className}`, ...rest, children: children }));
};

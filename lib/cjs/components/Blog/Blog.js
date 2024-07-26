import { jsx as _jsx } from "react/jsx-runtime";
export const Blog = ({ className = "", children, ...rest }) => {
    return (_jsx("article", { className: `${className}`, ...rest, children: children }));
};

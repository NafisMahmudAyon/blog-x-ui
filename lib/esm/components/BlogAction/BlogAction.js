import { jsx as _jsx } from "react/jsx-runtime";
export const BlogAction = ({ className = "", href = "#", children, ...rest }) => {
    return (_jsx("a", { href: href, className: `${className}`, ...rest, children: children }));
};

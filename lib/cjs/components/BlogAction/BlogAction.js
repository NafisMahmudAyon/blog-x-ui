import { jsx as _jsx } from "react/jsx-runtime";
export const BlogAction = ({ className = "", link = "#", children, ...rest }) => {
    return (_jsx("a", { href: link, className: `${className}`, ...rest, children: children }));
};

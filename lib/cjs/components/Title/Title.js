import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
export const Title = ({ tagName = 'h2', className = '', title, isLink, link, children, ...rest }) => {
    const Tag = tagName;
    return (_jsx(Tag, { className: className, ...rest, children: children ? children : _jsx(_Fragment, { children: (isLink && link) ? _jsx("a", { href: link, children: title }) : title }) }));
};

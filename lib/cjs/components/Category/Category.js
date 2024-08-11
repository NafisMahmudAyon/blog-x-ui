import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
export const Category = ({ categories = "", categoryItemStyle = "", className = "", children, isLink, link, tagName = "div", ...rest }) => {
    const Tag = tagName;
    return (_jsxs(Tag, { className: className, ...rest, children: [children && children, !children &&
                _jsxs(_Fragment, { children: [typeof categories === "object" && categories.map((category, i) => (_jsx(_Fragment, { children: (isLink || link) ? _jsx("a", { href: link, className: categoryItemStyle, children: category }, i) : _jsx("span", { className: categoryItemStyle, children: category }, i) }))), typeof categories === "string" &&
                            _jsx(_Fragment, { children: (isLink || link) ? _jsx("a", { href: link, className: categoryItemStyle, children: categories }) : _jsx("span", { className: categoryItemStyle, children: categories }) })] })] }));
};
export default Category;

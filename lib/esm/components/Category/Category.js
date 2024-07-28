import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
export const Category = ({ categories = "", categoryItemStyle = "", className = "", children, categoryName = "div", ...rest }) => {
    const CategoryTag = categoryName;
    return (_jsxs(CategoryTag, { className: className, ...rest, children: [children && children, !children &&
                _jsxs(_Fragment, { children: [typeof categories === "object" && categories.map((category, i) => (_jsx("span", { className: categoryItemStyle, children: category }, i))), typeof categories === "string" && _jsx("span", { className: categoryItemStyle, children: categories })] })] }));
};
export default Category;

import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { formatNumber } from '../utils/FormatNumber';
export const MetaInfo = ({ count, countPosition = "before", type, readTime, viewsCount, commentsCount, shareCount, className = "", children, text, countStyle = "", textStyle = "", ...rest }) => {
    const getDefaultText = () => {
        switch (type) {
            case 'readTime':
                return "min read";
            case 'viewsCount':
                return 'views';
            case 'commentCount':
                return 'comments';
            case 'shareCount':
                return 'shares';
            default:
                return '';
        }
    };
    return (_jsxs("div", { className: `${className}`, ...rest, children: [children && children, !children && (_jsxs(_Fragment, { children: [count !== undefined && countPosition === "before" && (_jsxs("span", { className: `${countStyle}`, children: [type === "readTime" && count, (type === "viewsCount" || type === "commentCount" || type === "shareCount") && formatNumber(count)] })), " ", _jsx("span", { className: `${textStyle}`, children: text ? text : ` ${getDefaultText()}` }), count !== undefined && countPosition === "after" && (_jsxs("span", { className: `${countStyle}`, children: [type === "readTime" && count, (type === "viewsCount" || type === "commentCount" || type === "shareCount") && formatNumber(count)] }))] }))] }));
};
export default MetaInfo;

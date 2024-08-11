import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
export const FeaturedImage = ({ className = '', src, caption, lazyLoad, imageStyle = "", captionStyle = "", ...rest }) => {
    return (_jsxs(_Fragment, { children: [caption &&
                _jsxs("figure", { className: `${className}`, ...rest, children: [_jsx("img", { src: src, className: `${imageStyle}` }), _jsx("figcaption", { className: `${captionStyle}`, children: caption })] }), !caption &&
                _jsx("img", { src: src, className: `${className}`, ...rest })] }));
};

import { jsx as _jsx } from "react/jsx-runtime";
export const FeaturedImage = ({ className = '', src, ...rest }) => {
    return (_jsx("img", { src: src, className: `${className}`, ...rest }));
};

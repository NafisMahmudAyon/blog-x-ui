import { jsx as _jsx } from "react/jsx-runtime";
export const SocialShare = ({ className = "", children, ...rest }) => {
    return (_jsx("div", { className: `${className}`, ...rest, children: children }));
};

import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar } from "../Icon";
export const Author = ({ type = "avatar", content, contentStyle = "", isLink, profileLink, profileImage, avatarStyle = "", iconEnabled = false, icon, prefix, prefixStyle = "", postfix, postfixStyle = "", tagName = "div", className = "", children, ...rest }) => {
    const Tag = isLink && profileLink ? 'a' : tagName;
    // Create a combined props object with the correct type
    const combinedProps = {
        className,
        ...rest,
        ...((isLink && profileLink) ? { href: profileLink } : {})
    };
    return (_jsxs(Tag, { ...combinedProps, children: [type === "avatar" && (_jsxs(_Fragment, { children: [profileImage && (_jsx("img", { className: avatarStyle, src: profileImage, alt: content || "Avatar" })), iconEnabled && !profileImage && (_jsx(_Fragment, { children: icon ? icon :
                            _jsx(Avatar, { className: avatarStyle }) }))] })), (type === "name" || type === "description") && (_jsxs(_Fragment, { children: [prefix && _jsx("span", { className: `${prefixStyle}`, children: prefix }), _jsx("span", { className: `${contentStyle}`, children: content }), postfix && _jsx("span", { className: `${postfixStyle}`, children: postfix })] }))] }));
};

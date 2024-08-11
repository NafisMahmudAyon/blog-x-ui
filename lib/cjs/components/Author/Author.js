import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar } from "../Icon";
export const Author = ({ type = "avatar", name, isLink, profileLink, profileImage, avatarStyle = "", tagName = "div", className = "", children, ...rest }) => {
    const Tag = isLink && profileLink ? 'a' : tagName;
    // Create a combined props object with the correct type
    const combinedProps = {
        className,
        ...rest,
        ...((isLink && profileLink) ? { href: profileLink } : {})
    };
    return (_jsxs(Tag, { ...combinedProps, children: [type === "avatar" && (_jsx(_Fragment, { children: profileImage ? (_jsx("img", { className: avatarStyle, src: profileImage, alt: name || "Avatar" })) : (_jsx(Avatar, { className: avatarStyle })) })), (type === "name" || type === "description") && name, children] }));
};

import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { Author } from "../Author/Author";
export const AuthorBio = ({ tagName = "div", content, isLink, profileLink, profileImage, iconEnabled, prefix, postfix, children, className = "", ...rest }) => {
    const Tag = tagName;
    const authorProps = {
        content: content,
        isLink: isLink,
        profileLink: profileLink,
        profileImage: profileImage,
        iconEnabled: iconEnabled,
        prefix: prefix,
        postfix: postfix,
    };
    return (_jsx(Tag, { className: `${className}`, ...rest, children: React.Children.map(children, (child) => {
            if (React.isValidElement(child) && child.type === Author) {
                return React.cloneElement(child, { ...authorProps, ...child.props });
            }
            return child;
        }) }));
};

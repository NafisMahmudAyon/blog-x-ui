import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { Author } from "../Author/Author";
export const AuthorBio = ({ tagName = "div", name, isLink, profileLink, profileImage, children, className = "", ...rest }) => {
    const Tag = tagName;
    const authorProps = {
        name: name,
        isLink: isLink,
        profileLink: profileLink,
        profileImage: profileImage,
    };
    return (_jsx(Tag, { className: `${className}`, ...rest, children: React.Children.map(children, (child) => {
            if (React.isValidElement(child) && child.type === Author) {
                return React.cloneElement(child, { ...authorProps, ...child.props });
            }
            return child;
        }) }));
};

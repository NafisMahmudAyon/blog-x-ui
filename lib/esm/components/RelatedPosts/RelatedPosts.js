import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { RelatedPost } from "./RelatedPost";
export const RelatedPosts = ({ className = "", children, posts, ...rest }) => {
    return (_jsx("div", { className: `${className}`, ...rest, children: React.Children.map(children, (child) => {
            if (React.isValidElement(child) && child.type === RelatedPost) {
                return React.cloneElement(child);
            }
            return null;
        }) }));
};

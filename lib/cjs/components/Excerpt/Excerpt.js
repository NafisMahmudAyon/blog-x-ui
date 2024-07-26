import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Excerpt = ({ tagName = "p", className = "", limitBy = "word", limit, children = "", ...rest }) => {
    const Tag = tagName;
    var getLimitedWordContent = (data) => {
        var content = "";
        var x = Object.entries(data).map((d) => {
            var dData = d[1];
            return dData;
        });
        content = x.join(" ");
        var limitedContent = content.split(" ").splice(0, limit).join(" ");
        return limitedContent;
    };
    var getLimitedCharContent = (data) => {
        var content = "";
        var x = Object.entries(data).map((d) => {
            var dData = d[1];
            return dData;
        });
        content = x.join(" ");
        var limitedContent = content.substring(0, limit);
        return limitedContent;
    };
    return (_jsxs(Tag, { className: `${className}`, ...rest, children: [children != "undefined" && typeof children === "string" &&
                _jsxs(_Fragment, { children: [limitBy == "word" && _jsx(_Fragment, { children: children.split(" ").splice(0, limit).join(" ") }), limitBy == "character" && _jsx(_Fragment, { children: children.substring(0, limit) }), (limitBy == "character" || limitBy == "word") && !limit && _jsx(_Fragment, { children: children })] }), children != "undefined" && typeof children === "object" &&
                _jsxs(_Fragment, { children: [limitBy == "word" && _jsx(_Fragment, { children: getLimitedWordContent(children) }), limitBy == "character" && _jsx(_Fragment, { children: getLimitedCharContent(children) }), (limitBy == "character" || limitBy == "word") && !limit && _jsx(_Fragment, { children: children })] }), limit && "..."] }));
};

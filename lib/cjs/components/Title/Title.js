import { jsx as _jsx } from "react/jsx-runtime";
export const Title = ({ tagName = 'h1', className = '', children, link, linkStyle = '', ...rest }) => {
    // const Tag = tagName as keyof JSX.IntrinsicElements;
    // let tag: TitleProps["tagName"] = useState(tagName);
    const Tag = tagName;
    if (link) {
        // Extract attributes specific to <a> tag
        // const { href, ...anchorProps } = rest;
        return (_jsx("a", { href: link, className: linkStyle, ...rest, children: _jsx(Tag, { className: className, children: children }) }));
    }
    // For heading tags, apply all remaining props
    return (_jsx(Tag, { className: className, ...rest, children: children }));
};
export default Title;

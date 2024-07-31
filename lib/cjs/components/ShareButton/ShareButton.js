'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Facebook, Twitter, LinkedIn, Pinterest, WhatsApp, Email, Telegram } from '../Icon';
export const ShareButton = ({ className = '', socialSite = 'Facebook', children, icon, iconEnabled = false, iconPosition = "before", iconStyle = "", ...rest }) => {
    const getShareLink = (socialSite) => {
        if (typeof window === 'undefined') {
            return '#';
        }
        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(document.title);
        switch (socialSite) {
            case 'Facebook':
                return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            case 'Twitter':
                return `https://twitter.com/intent/tweet?text=${title}&url=${url}`;
            case 'LinkedIn':
                return `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`;
            case 'Pinterest':
                return `https://pinterest.com/pin/create/button/?url=${url}&description=${title}`;
            case 'WhatsApp':
                return `https://wa.me/?text=${title}%20${url}`;
            case 'Telegram':
                return `https://t.me/share/url?url=${url}&text=${title}`;
            case 'Email':
                return `mailto:?subject=${title}&body=${url}`;
            default:
                return '#';
        }
    };
    const handleClick = () => {
        const link = getShareLink(socialSite);
        window.open(link, '_blank');
    };
    const renderIcon = () => {
        if (icon)
            return icon;
        switch (socialSite) {
            case 'Facebook':
                return _jsx(Facebook, { className: iconStyle });
            case 'Twitter':
                return _jsx(Twitter, { className: iconStyle });
            case 'LinkedIn':
                return _jsx(LinkedIn, { className: iconStyle });
            case 'Pinterest':
                return _jsx(Pinterest, { className: iconStyle });
            case 'WhatsApp':
                return _jsx(WhatsApp, { className: iconStyle });
            case 'Telegram':
                return _jsx(Telegram, { className: iconStyle });
            case 'Email':
                return _jsx(Email, { className: iconStyle });
            default:
                return null;
        }
    };
    return (_jsxs("button", { className: className, onClick: handleClick, ...rest, children: [iconEnabled && iconPosition === "before" && renderIcon(), children && children, !children && _jsxs("span", { children: ["Share on ", socialSite] }), iconEnabled && iconPosition === "after" && renderIcon()] }));
};

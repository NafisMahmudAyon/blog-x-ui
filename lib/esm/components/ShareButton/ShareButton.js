'use client';
import { Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
export const ShareButton = ({ className = '', socialSite = 'Facebook', children, ...rest }) => {
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
    console.log(getShareLink(socialSite));
    const handleClick = () => {
        const link = getShareLink(socialSite);
        window.open(link, '_blank');
    };
    return (_jsxs("button", { className: className, onClick: handleClick, ...rest, children: [children && children, children && _jsxs(_Fragment, { children: ["Share on ", socialSite] })] }));
};
export default ShareButton;

'use client'

import React from 'react';
import { Facebook, Twitter, LinkedIn, Pinterest, WhatsApp, Email, Telegram } from '../Icon';

interface ShareButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  socialSite?: "Facebook" | "Twitter" | "LinkedIn" | "Pinterest" | "WhatsApp" | "Telegram" | "Email";
  target?: "_blank" | "_self" | "_parent" | "_top";
  children?: React.ReactNode;
  iconEnabled?: boolean;
  icon?: React.ReactNode;
  iconStyle?: string;
  iconPosition?: "before" | "after";
}

export const ShareButton: React.FC<ShareButtonProps> = ({
  className = '',
  socialSite = 'Facebook',
  target="_blank",
  children,
  icon,
  iconEnabled = false,
  iconPosition = "before",
  iconStyle = "",
  ...rest
}) => {
  const getShareLink = (socialSite: ShareButtonProps["socialSite"]) => {
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
    window.open(link, target);
  };

  const renderIcon = () => {
    if (icon) return icon;

    switch (socialSite) {
      case 'Facebook':
        return <Facebook className={iconStyle} />;
      case 'Twitter':
        return <Twitter className={iconStyle} />;
      case 'LinkedIn':
        return <LinkedIn className={iconStyle} />;
      case 'Pinterest':
        return <Pinterest className={iconStyle} />;
      case 'WhatsApp':
        return <WhatsApp className={iconStyle} />;
      case 'Telegram':
        return <Telegram className={iconStyle} />;
      case 'Email':
        return <Email className={iconStyle} />;
      default:
        return null;
    }
  };

  return (
    <button className={className} onClick={handleClick} {...rest}>
      {iconEnabled && iconPosition === "before" && renderIcon()}
      {children && children}
      {!children && <span>Share on {socialSite}</span>}
      {iconEnabled && iconPosition === "after" && renderIcon()}
    </button>
  );
};


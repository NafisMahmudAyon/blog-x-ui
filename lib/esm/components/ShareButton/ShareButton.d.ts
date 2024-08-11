import React from 'react';
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
export declare const ShareButton: React.FC<ShareButtonProps>;
export {};

interface ShareButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    socialSite?: "Facebook" | "Twitter" | "LinkedIn" | "Pinterest" | "WhatsApp" | "Telegram" | "Email";
    children?: React.ReactNode;
}
export declare const ShareButton: React.FC<ShareButtonProps>;
export default ShareButton;

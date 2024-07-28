'use client'
interface ShareButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  socialSite?: "Facebook" | "Twitter" | "LinkedIn" | "Pinterest" | "WhatsApp" | "Telegram" | "Email";
  children?: React.ReactNode
}

export const ShareButton: React.FC<ShareButtonProps> = ({ className = '', socialSite = 'Facebook', children, ...rest }) => {
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

  console.log(getShareLink(socialSite))

  const handleClick = () => {
    const link = getShareLink(socialSite);
    window.open(link, '_blank');
  };

  return (
    <button className={className} onClick={handleClick} {...rest}>
      {children && children}
      {children && <>Share on {socialSite}</>}
    </button>
  );
};

export default ShareButton;

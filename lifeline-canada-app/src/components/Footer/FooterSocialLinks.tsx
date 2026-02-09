import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

interface SocialIconProps {
  href: string;
  Icon: React.ComponentType<{ size: number }>;
  label: string;
  bgClass: string;
}

const SocialIcon = React.memo(function SocialIcon({
  href,
  Icon,
  label,
  bgClass,
}: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative p-3 text-white transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
      aria-label={`Follow us on ${label}`}
    >
      {/* Square background with glow effect */}
      <div
        className={`absolute inset-0 rounded-xl ${bgClass} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm`}
      />

      {/* Square icon container */}
      <div
        className={`relative z-10 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-white/15 group-hover:border-white/30 ${bgClass.replace('opacity-0', 'opacity-10')} group-hover:shadow-lg group-hover:shadow-current/20`}
      >
        <Icon size={22} aria-hidden="true" />
      </div>

      <span className="sr-only">{label}</span>
    </a>
  );
});

SocialIcon.displayName = 'SocialIcon';

interface SocialPlatform {
  platform: string;
  href: string;
  Icon: React.ComponentType<{ size: number }>;
  bgClass: string;
}

const socialPlatforms: SocialPlatform[] = [
  {
    platform: 'Facebook',
    href: 'https://www.facebook.com/thelifelinecanada',
    Icon: FaFacebookF,
    bgClass: 'bg-gradient-to-br from-blue-500/20 to-blue-600/20',
  },
  {
    platform: 'Instagram',
    href: 'https://www.instagram.com/thelifelinecanada/',
    Icon: FaInstagram,
    bgClass: 'bg-gradient-to-br from-pink-500/20 to-rose-600/20',
  },
  {
    platform: 'Twitter',
    href: 'https://twitter.com/thelifelinecan',
    Icon: FaTwitter,
    bgClass: 'bg-gradient-to-br from-sky-500/20 to-blue-500/20',
  },
  {
    platform: 'YouTube',
    href: 'https://youtube.com/@thelifelinecanada',
    Icon: FaYoutube,
    bgClass: 'bg-gradient-to-br from-red-500/20 to-red-600/20',
  },
];

export default function FooterSocialLinks() {
  return (
    <div className="flex items-center gap-3" role="list">
      {socialPlatforms.map((platform) => (
        <div key={platform.platform} role="listitem">
          <SocialIcon
            href={platform.href}
            Icon={platform.Icon}
            label={platform.platform}
            bgClass={platform.bgClass}
          />
        </div>
      ))}
    </div>
  );
}

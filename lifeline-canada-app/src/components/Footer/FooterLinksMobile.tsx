import React from 'react';
import { Users, HandHeart, Globe, ChevronDown } from 'lucide-react';
import FooterLink from './FooterLink';
import FooterSocialLinks from './FooterSocialLinks';
import { Home, Heart, Brain, Smartphone, BookOpen } from 'lucide-react';

interface FooterLinksMobileProps {
  openSections: Record<string, boolean>;
  toggleSection: (section: string) => void;
}

export default function FooterLinksMobile({
  openSections,
  toggleSection,
}: FooterLinksMobileProps) {
  return (
    <div className="space-y-4">
      {/* Quick Links Section */}
      <div className="bg-blue-900/20 backdrop-blur-sm rounded-2xl border border-blue-700/30 overflow-hidden">
        <button
          onClick={() => toggleSection('quickLinks')}
          className="w-full flex items-center justify-between p-5 text-left"
        >
          <div className="flex items-center gap-3">
            <Users className="text-blue-400" size={20} />
            <h3 className="text-lg font-bold">Quick Links</h3>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-blue-400 transition-transform duration-300 ${openSections.quickLinks ? 'rotate-180' : ''}`}
          />
        </button>
        <div
          className={`px-5 pb-5 space-y-2 ${openSections.quickLinks ? 'block' : 'hidden'}`}
        >
          <FooterLink to="/about" icon={<Home size={16} />}>
            About Us
          </FooterLink>
          <FooterLink to="/in-crisis" icon={<Heart size={16} />}>
            In Crisis?
          </FooterLink>
          <FooterLink to="/resources" icon={<BookOpen size={16} />}>
            Resources
          </FooterLink>
          <FooterLink to="/pattern-interrupt" icon={<Brain size={16} />}>
            Pattern Interrupts
          </FooterLink>
          <FooterLink to="/the-lifeline-app" icon={<Smartphone size={16} />}>
            The LifeLine App
          </FooterLink>
        </div>
      </div>

      {/* Support Section */}
      <div className="bg-blue-900/20 backdrop-blur-sm rounded-2xl border border-blue-700/30 overflow-hidden">
        <button
          onClick={() => toggleSection('support')}
          className="w-full flex items-center justify-between p-5 text-left"
        >
          <div className="flex items-center gap-3">
            <HandHeart className="text-blue-400" size={20} />
            <h3 className="text-lg font-bold">Support</h3>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-blue-400 transition-transform duration-300 ${openSections.support ? 'rotate-180' : ''}`}
          />
        </button>
        <div
          className={`px-5 pb-5 space-y-2 ${openSections.support ? 'block' : 'hidden'}`}
        >
          <FooterLink to="/contact-us">Contact Us</FooterLink>
          <FooterLink to="/support">Support Center</FooterLink>
          <FooterLink to="/email-support">Email Support</FooterLink>
          <FooterLink to="/make-a-contribution">Make a Contribution</FooterLink>
        </div>
      </div>

      {/* Connect Section */}
      <div className="bg-blue-900/20 backdrop-blur-sm rounded-2xl border border-blue-700/30 overflow-hidden">
        <button
          onClick={() => toggleSection('connect')}
          className="w-full flex items-center justify-between p-5 text-left"
        >
          <div className="flex items-center gap-3">
            <Globe className="text-blue-400" size={20} />
            <h3 className="text-lg font-bold">Connect</h3>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-blue-400 transition-transform duration-300 ${openSections.connect ? 'rotate-180' : ''}`}
          />
        </button>
        <div
          className={`px-5 pb-5 space-y-2 ${openSections.connect ? 'block' : 'hidden'}`}
        >
          <div className="grid grid-cols-4 gap-3 mb-4">
            <FooterSocialLinks />
          </div>
          <FooterLink to="/fr">En Français</FooterLink>
          <FooterLink to="/site-map">Site Map</FooterLink>
          <FooterLink to="/join-newsletter">Join Newsletter</FooterLink>
        </div>
      </div>
    </div>
  );
}

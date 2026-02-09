import React from 'react';
import { Users, HandHeart, BookOpen, Globe, Sparkles } from 'lucide-react';
import FooterSection from './FooterSection';
import FooterLink from './FooterLink';
import FooterSocialLinks from './FooterSocialLinks';
import {
  Home,
  Heart,
  Brain,
  Smartphone,
  BookOpen as Book,
  HandHeart as Hand,
} from 'lucide-react';

export default function FooterLinksDesktop() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      <FooterSection
        title="Quick Links"
        icon={<Users className="text-blue-400" size={20} />}
      >
        <FooterLink to="/about" icon={<Home size={16} />}>
          About Us
        </FooterLink>
        <FooterLink to="/in-crisis" icon={<Heart size={16} />}>
          In Crisis?
        </FooterLink>
        <FooterLink to="/resources" icon={<Book size={16} />}>
          Resources
        </FooterLink>
        <FooterLink to="/pattern-interrupt" icon={<Brain size={16} />}>
          Pattern Interrupts
        </FooterLink>
        <FooterLink to="/the-lifeline-app" icon={<Smartphone size={16} />}>
          The LifeLine App
        </FooterLink>
        <FooterLink to="/get-involved" icon={<Hand size={16} />}>
          Get Involved
        </FooterLink>
      </FooterSection>

      <FooterSection
        title="Support"
        icon={<HandHeart className="text-blue-400" size={20} />}
      >
        <FooterLink to="/contact-us">Contact Us</FooterLink>
        <FooterLink to="/support">Support Center</FooterLink>
        <FooterLink to="/email-support">Email Support</FooterLink>
        <FooterLink to="/make-a-contribution">Make a Contribution</FooterLink>
        <FooterLink to="/faq">FAQ</FooterLink>
        <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
      </FooterSection>

      <FooterSection
        title="Resources"
        icon={<BookOpen className="text-blue-400" size={20} />}
      >
        <FooterLink to="/resources/movies-of-inspiration">
          Movies of Inspiration
        </FooterLink>
        <FooterLink to="/resources/helpful-movies">Helpful Movies</FooterLink>
        <FooterLink to="/resources/guides">Mental Health Guides</FooterLink>
        <FooterLink to="/resources/tools">Interactive Tools</FooterLink>
        <FooterLink to="/resources/stories">Success Stories</FooterLink>
        <FooterLink to="/research">Research & Studies</FooterLink>
      </FooterSection>

      <div className="space-y-8">
        <FooterSection
          title="Connect"
          icon={<Globe className="text-blue-400" size={20} />}
        >
          <FooterLink to="/fr">En Français</FooterLink>
          <FooterLink to="/site-map">Site Map</FooterLink>
          <FooterLink to="/join-newsletter">Join Our Newsletter</FooterLink>
          <FooterLink to="/volunteer">Volunteer</FooterLink>
        </FooterSection>

        <div>
          <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            Follow Our Journey
          </h4>
          <FooterSocialLinks />
        </div>
      </div>
    </div>
  );
}

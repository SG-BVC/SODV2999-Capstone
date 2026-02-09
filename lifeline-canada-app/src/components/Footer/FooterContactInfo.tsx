import React, { type ReactNode } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

interface ContactInfoProps {
  icon: ReactNode;
  title: string;
  value: string;
  subtitle: string;
  emergency?: boolean;
}

function ContactInfo({
  icon,
  title,
  value,
  subtitle,
  emergency = false,
}: ContactInfoProps) {
  return (
    <div className="group bg-blue-900/20 backdrop-blur-sm rounded-2xl border border-blue-700/30 p-5 hover:border-blue-500/50 transition-all duration-300">
      <div className="flex items-center gap-3 mb-3">
        <div
          className={`p-2.5 rounded-lg ${emergency ? 'bg-red-500/20' : 'bg-blue-500/20'}`}
        >
          {icon}
        </div>
        <div>
          <h4 className="font-semibold text-blue-100">{title}</h4>
          {emergency && (
            <span className="text-xs bg-red-500/20 text-red-300 px-2 py-1 rounded-full">
              Emergency
            </span>
          )}
        </div>
      </div>
      <p className="text-xl font-bold text-white mb-1 group-hover:text-blue-100 transition-colors">
        {value}
      </p>
      <p className="text-sm text-blue-300">{subtitle}</p>
    </div>
  );
}

export default function FooterContactInfo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:w-1/2">
      <ContactInfo
        icon={<Phone className="text-blue-400" size={20} />}
        title="Crisis Support"
        value="988"
        subtitle="24/7 Crisis Line"
        emergency
      />
      <ContactInfo
        icon={<Mail className="text-blue-400" size={20} />}
        title="Email"
        value="support@thelifelinecanada.org"
        subtitle="Response within 24h"
      />
      <ContactInfo
        icon={<MapPin className="text-blue-400" size={20} />}
        title="Location"
        value="Across Canada"
        subtitle="Nationwide Support"
      />
    </div>
  );
}

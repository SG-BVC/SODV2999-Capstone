import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Brain, Award, Shield } from 'lucide-react';

export default function FooterLogo() {
  return (
    <div className="flex-1">
      <Link to="/" className="group block max-w-sm">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl blur-lg opacity-70 group-hover:opacity-90 transition-opacity" />
            <div className="relative p-4 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl group-hover:from-blue-700 group-hover:to-indigo-800 transition-all duration-300 shadow-2xl">
              <Heart className="text-white" size={32} />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent">
              The LifeLine Canada
            </h2>
            <p className="text-blue-300 mt-1 font-medium">
              Foundation for Mental Health
            </p>
            <div className="flex items-center gap-2 mt-2">
              <Brain className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-200">
                Transforming Lives Since 2010
              </span>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap gap-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900/40 backdrop-blur-sm rounded-xl border border-blue-700/30">
            <Award className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-blue-200">Registered Charity</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900/40 backdrop-blur-sm rounded-xl border border-blue-700/30">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-sm text-blue-200">SSL Secured</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

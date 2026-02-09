import { Link } from 'react-router-dom';
import { Sparkles, Activity } from 'lucide-react';

export default function GetInvolvedButton() {
  return (
    <Link
      to="/get-involved"
      className="fixed top-10 right-10 flex items-center justify-center group h-10 px-4 rounded-lg text-sm font-bold transition-all duration-300 overflow-hidden z-50"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 group-hover:from-emerald-500 group-hover:via-teal-600 group-hover:to-cyan-600 transition-all duration-300"></div>

      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

      {/* Glow effect */}
      <div className="absolute -inset-3 bg-gradient-to-r from-emerald-400/30 to-cyan-400/30 rounded-lg blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>

      {/* Content */}
      <div className="relative flex items-center justify-center gap-2 text-white text-xs">
        <Sparkles className="w-4 h-4 animate-spin-slow" />
        <span className="tracking-wide">GET INVOLVED</span>
        <Activity className="w-4 h-4 animate-bounce-slow" />
      </div>

      {/* Floating hearts using Tailwind positions */}
      <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-0 left-2 text-white/40 animate-float-fast text-xs">
          ❤️
        </div>
        <div className="absolute top-3 left-1/3 text-white/40 animate-float-fast animation-delay-300 text-sm">
          ❤️
        </div>
        <div className="absolute top-4 right-4 text-white/40 animate-float-fast animation-delay-500 text-base">
          ❤️
        </div>
      </div>
    </Link>
  );
}

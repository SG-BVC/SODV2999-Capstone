import { Link } from 'react-router-dom';
import { Heart, Sparkles, Star } from 'lucide-react';
import logoImage from '../../assets/CPCLogo72dpi.png';

export default function Logo() {
  return (
    <>
      <style>{`
        @keyframes sparkle {
          0%, 100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
          25% {
            opacity: 0.8;
            transform: scale(1.2) rotate(10deg);
          }
          50% {
            opacity: 1;
            transform: scale(0.9) rotate(-5deg);
          }
          75% {
            opacity: 0.9;
            transform: scale(1.1) rotate(5deg);
          }
        }

        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-2px) translateX(1px);
          }
          50% {
            transform: translateY(0) translateX(0);
          }
          75% {
            transform: translateY(2px) translateX(-1px);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 1;
            filter: brightness(1);
          }
          50% {
            opacity: 0.6;
            filter: brightness(1.3);
          }
        }

        .animate-twinkle {
          animation: twinkle 2.5s ease-in-out infinite;
        }

        @keyframes heartBeat {
          0%, 100% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.1);
          }
          50% {
            transform: scale(0.95);
          }
          75% {
            transform: scale(1.05);
          }
        }

        .animate-heart-beat {
          animation: heartBeat 1.5s ease-in-out infinite;
        }
      `}</style>

      <Link
        to="/"
        className="flex items-center gap-1 sm:gap-2 lg:gap-3 group relative"
      >
        {/* Soft Hover Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

        {/* Icon Container with Hearts */}
        <div className="relative bottom-5 sm:bottom-0 sm:flex items-center justify-center">
          {/* Main Logo */}
          <div className="relative">
            <img
              src={logoImage}
              alt="Heart"
              className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 object-contain relative z-10 drop-shadow-lg"
            />

            {/* Four Hearts - One in each position */}
            <div className="absolute inset-0">
              {/* Top Heart */}
              <Heart className="absolute -top-[3px] left-1/2 -translate-x-1/2 text-pink-400 w-3 h-3 sm:w-4 sm:h-4 animate-bounce fill-pink-400/30" />

              {/* Bottom Heart */}
              <Heart className="absolute bottom-[3px] sm:bottom-[10px] left-1/2 -translate-x-1/2 text-blue-400 w-3 h-3 sm:w-4 sm:h-4 animate-float fill-blue-400/30" />

              {/* Left Heart */}
              <Heart className="absolute top-1/2 -left-[3px] -translate-y-1/2 text-purple-400 w-3 h-3 sm:w-4 sm:h-4 animate-pulse fill-purple-400/30" />

              {/* Right Heart */}
              <Heart className="absolute top-1/2 -right-[3px] -translate-y-1/2 text-green-400 w-3 h-3 sm:w-4 sm:h-4 animate-sparkle fill-green-400/30" />
            </div>

            {/* Sparkles and Stars - One at each corner */}
            <Sparkles className="absolute -top-[4px] sm:top-[20px] sm -right-[4px] text-yellow-300 w-2 h-2 sm:w-3 sm:h-3 animate-spin-slow z-20 drop-shadow-lg" />
            <Star className="absolute -top-[4px] sm:top-[20px] -left-[4px] text-pink-300 w-2 h-2 sm:w-3 sm:h-3 animate-pulse z-20 drop-shadow-lg" />
            <Star className="absolute -bottom-[4px] sm:bottom-[15px] -right-[4px] sm:right-[4px] text-blue-300 w-2 h-2 sm:w-3 sm:h-3 animate-twinkle z-20 drop-shadow-lg" />
            <Sparkles className="absolute -bottom-[4px] sm:bottom-[15px] -left-[4px] text-purple-300 w-2 h-2 sm:w-3 sm:h-3 animate-float z-20 drop-shadow-lg" />
          </div>
        </div>

        {/* Text */}
        <div className="relative bottom-5 sm:bottom-0 leading-tight text-[clamp(8px,2vw,14px)]">
          <h1 className="font-black bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 bg-clip-text text-transparent whitespace-nowrap">
            The LifeLine
            <span className="block text-blue-600 text-[clamp(7px,1.8vw,14px)]">
              Canada
            </span>
          </h1>

          <p className="text-[clamp(6px,1.5vw,10px)] font-semibold text-gray-500 tracking-wide opacity-85 whitespace-nowrap">
            <span className="border-b border-gray-300/30 pb-[1px]">
              FOUNDATION FOR MENTAL HEALTH
            </span>
          </p>
        </div>
      </Link>
    </>
  );
}

import { Link } from 'react-router-dom';

interface MakeContributionButtonProps {
  closeMenu: () => void;
}

export const MakeContributionButton = ({
  closeMenu,
}: MakeContributionButtonProps) => (
  <div className="mt-2 pt-1 border-t border-gray-100/50">
    <div className="relative">
      {/* Glow effect - Updated to purple/pink theme */}
      <div
        className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 via-fuchsia-500/10 to-pink-500/10 
        blur-xl rounded-3xl"
      />

      <Link
        to="/make-contribution"
        onClick={closeMenu}
        className="group relative block w-full py-3 px-6 text-center font-bold rounded-2xl 
          bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 
          hover:from-purple-700 hover:via-fuchsia-700 hover:to-pink-700 
          text-white shadow-2xl hover:shadow-3xl transition-all duration-500 
          hover:-translate-y-1 active:scale-[0.98] overflow-hidden"
      >
        {/* Content */}
        <div className="relative flex items-center justify-center gap-3">
          <span className="text-lg text-white">Make a Contribution</span>
        </div>
      </Link>
    </div>
  </div>
);

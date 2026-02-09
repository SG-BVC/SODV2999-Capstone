import { Link } from 'react-router-dom';

interface GetInvolvedButtonProps {
  closeMenu: () => void;
}

export const GetInvolvedButton = ({ closeMenu }: GetInvolvedButtonProps) => (
  <div className="mt-2 pt-3 border-t border-gray-100/50">
    <div className="relative">
      {/* Glow effect */}
      <div
        className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 
        blur-xl rounded-3xl"
      />

      <Link
        to="/get-involved"
        onClick={closeMenu}
        className="group relative block w-full py-3 px-6 text-center font-bold rounded-2xl 
          bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 
          hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 
          text-white shadow-2xl hover:shadow-3xl transition-all duration-500 
          hover:-translate-y-1 active:scale-[0.98] overflow-hidden"
      >
        {/* Content */}
        <div className="relative flex items-center justify-center gap-3">
          <span className="text-lg">Get Involved</span>
        </div>
      </Link>

      <p className="text-center text-sm text-gray-500/80 mt-4">
        Join our community today
      </p>
    </div>
  </div>
);

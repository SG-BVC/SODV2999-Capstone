import { Link } from 'react-router-dom';

export default function FooterBottomBar() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="border-t border-blue-800/30 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-blue-300 text-sm">
              © {currentYear} The LifeLine Canada Foundation. All rights
              reserved.
            </p>
            <p className="text-blue-400/70 text-xs mt-1">
              Registered Charity #12345-6789 RR0001
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <Link
              to="/privacy-policy"
              className="text-blue-300 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-blue-300 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/accessibility"
              className="text-blue-300 hover:text-white transition-colors"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

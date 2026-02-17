import { Menu } from 'lucide-react';

interface MenuToggleButtonProps {
  onClick: () => void;
}

export const MenuToggleButton = ({ onClick }: MenuToggleButtonProps) => (
  <button
    onClick={onClick}
    className="relative p-3 ml-5 bg-gradient-to-br from-blue-300 via-yellow-300 to-gray-500 
      hover:from-blue-700 hover:via-blue-500 hover:to-blue-600 
      rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group 
      border border-blue-300 active:scale-95 focus:outline-none focus:ring-2 
      focus:ring-blue-500/50"
    aria-label="Open menu"
  >
    <Menu className="w-5 h-5 text-white group-hover:text-white transition-colors" />
  </button>
);

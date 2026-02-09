import { Menu } from 'lucide-react';

interface MenuToggleButtonProps {
  onClick: () => void;
}

export const MenuToggleButton = ({ onClick }: MenuToggleButtonProps) => (
  <button
    onClick={onClick}
    className=" p-3 bg-gradient-to-br from-white to-gray-50 hover:from-blue-50 hover:to-indigo-50 
      rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group border border-gray-100
      active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
    aria-label="Open menu"
  >
    <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full animate-ping" />
    <Menu className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
  </button>
);

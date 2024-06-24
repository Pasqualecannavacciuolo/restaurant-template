import { X } from "lucide-react";
import { Link } from "react-router-dom";

export default function MobileDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={`fixed flex flex-col justify-center items-center z-10 top-0 right-0 h-full w-full bg-white text-black transition-transform duration-300 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button className="absolute right-7 top-4 p-3" onClick={onClose}>
        <X className="w-5 h-5" />
      </button>
      <div className="flex flex-col justify-center items-center space-y-4">
        <Link className="text-3xl hover:font-semibold" to="/" onClick={onClose}>
          Home
        </Link>
        <Link
          className="text-3xl hover:font-semibold"
          to="/menu"
          onClick={onClose}
        >
          Menu
        </Link>
        <Link
          className="text-3xl hover:font-semibold"
          to="/prenota"
          onClick={onClose}
        >
          Prenota
        </Link>
        {/* Add other navigation links */}
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function DesktopNavLinks() {
  return (
    <div className="flex flex-row gap-5 justify-center">
      <Link className="text-xl" to="/">
        Home
      </Link>
      <Link className="text-xl" to="/menu">
        Menu
      </Link>
      <Link className="text-xl" to="/prenota">
        Prenota
      </Link>
      {/* Add other navigation links */}
    </div>
  );
}

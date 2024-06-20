import { Link } from "react-router-dom";

export default function DesktopNavLinks() {
  return (
    <div className="flex flex-row gap-5 justify-center">
      <Link className="text-xl prompt-light" to="/">
        Home
      </Link>
      <Link className="text-xl prompt-light" to="/menu">
        Menu
      </Link>
      <Link className="text-xl prompt-light" to="/prenota">
        Prenota
      </Link>
      {/* Add other navigation links */}
    </div>
  );
}

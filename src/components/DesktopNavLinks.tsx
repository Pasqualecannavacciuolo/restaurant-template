import React from "react";
import { Link } from "react-router-dom";

interface DesktopNavLinksProps {
  scrollToHome: () => void;
  scrollToMenu: () => void;
  scrollToPrenota: () => void;
}

const DesktopNavLinks: React.FC<DesktopNavLinksProps> = ({
  scrollToHome,
  scrollToMenu,
  scrollToPrenota,
}) => {
  return (
    <div className="hidden xl:flex flex-row gap-5 justify-center">
      <Link className="text-xl prompt-light" to="/" onClick={scrollToHome}>
        Home
      </Link>
      <Link className="text-xl prompt-light" to="/menu" onClick={scrollToMenu}>
        Menu
      </Link>
      <Link
        className="text-xl prompt-light"
        to="/prenota"
        onClick={scrollToPrenota}
      >
        Prenota
      </Link>
      {/* Add other navigation links */}
    </div>
  );
};

export default DesktopNavLinks;

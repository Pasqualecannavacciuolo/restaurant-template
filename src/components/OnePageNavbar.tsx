import React from "react";

interface NavbarProps {
  scrollToHome: () => void;
  scrollToMenu: () => void;
  scrollToPrenota: () => void;
}

const OnePageNavbar: React.FC<NavbarProps> = ({
  scrollToHome,
  scrollToMenu,
  scrollToPrenota,
}) => {
  return (
    <nav className="sticky top-0 bg-white shadow-md">
      <button onClick={scrollToHome}>Home</button>
      <button onClick={scrollToMenu}>Menu</button>
      <button onClick={scrollToPrenota}>Prenota</button>
    </nav>
  );
};

export default OnePageNavbar;

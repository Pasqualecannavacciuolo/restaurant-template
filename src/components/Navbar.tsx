import React, { useState } from "react";
import DesktopNavLinks from "./DesktopNavLinks";
import LogoLink from "./LogoLink";
import MobileDrawer from "./MobileDrawer";
import MobileMenuButton from "./MobileMenuButton";

interface NavbarProps {
  scrollToHome: () => void;
  scrollToMenu: () => void;
  scrollToPrenota: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  scrollToHome,
  scrollToMenu,
  scrollToPrenota,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="sticky top-0 shadow-md z-10 bg-white flex justify-between xl:flex-col xl:justify-center">
      <div className="hidden xl:relative xl:py-6 xl:flex xl:flex-col xl:justify-center">
        <LogoLink scrollToHome={scrollToHome} />
        <DesktopNavLinks
          scrollToHome={scrollToHome}
          scrollToMenu={scrollToMenu}
          scrollToPrenota={scrollToPrenota}
        />
      </div>
      <div className="xl:hidden px-4 py-4">
        <div className="flex flex-row">
          <LogoLink scrollToHome={scrollToHome} />
          <MobileMenuButton onClick={handleDrawerToggle} />
        </div>
        <MobileDrawer
          isOpen={isDrawerOpen}
          onClose={handleDrawerToggle}
          scrollToHome={scrollToHome}
          scrollToMenu={scrollToMenu}
          scrollToPrenota={scrollToPrenota}
        />
      </div>
    </nav>
  );
};

export default Navbar;

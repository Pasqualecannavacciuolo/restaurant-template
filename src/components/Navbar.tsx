import { useState } from "react";
import DesktopNavLinks from "./DesktopNavLinks";
import LogoLink from "./LogoLink";
import MobileDrawer from "./MobileDrawer";
import MobileMenuButton from "./MobileMenuButton";
import { Outlet } from "react-router-dom";

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <>
      <div className="hidden relative py-6 xl:flex flex-col justify-center">
        <LogoLink />
        <DesktopNavLinks />
      </div>
      <div className="xl:hidden relative flex flex-row items-center justify-between px-4 py-4">
        <LogoLink />
        <MobileMenuButton onClick={handleDrawerToggle} />
        <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
      </div>
      <div className="px-4 py-4">
        <Outlet />
      </div>
    </>
  );
}

export default Navbar;

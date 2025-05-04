
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-cpim-red text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="font-bold text-2xl tracking-tight">CPIM</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a
                href="#home"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-cpim-darkred"
              >
                Home
              </a>
              <a
                href="#about"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-cpim-darkred"
              >
                About
              </a>
              <a
                href="#leadership"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-cpim-darkred"
              >
                Leadership
              </a>
              <a
                href="#news"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-cpim-darkred"
              >
                News
              </a>
              <a
                href="#events"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-cpim-darkred"
              >
                Events
              </a>
              <Button className="bg-white text-cpim-red hover:bg-gray-200">
                <a href="#join">Join Us</a>
              </Button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-cpim-darkred focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-cpim-red border-t border-cpim-darkred">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-cpim-darkred"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-cpim-darkred"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#leadership"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-cpim-darkred"
              onClick={toggleMenu}
            >
              Leadership
            </a>
            <a
              href="#news"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-cpim-darkred"
              onClick={toggleMenu}
            >
              News
            </a>
            <a
              href="#events"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-cpim-darkred"
              onClick={toggleMenu}
            >
              Events
            </a>
            <Button className="bg-white text-cpim-red hover:bg-gray-200 w-full" onClick={toggleMenu}>
              <a href="#join" className="w-full text-center">Join Us</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

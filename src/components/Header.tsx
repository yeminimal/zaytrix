
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="navbar-brand sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/3e7c2dfe-fc30-4af0-8d06-e26ac3d7ec0c.png" 
              alt="Zaytrix Logo" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`nav-link text-sm font-medium tracking-tight transition-colors ${
                isActive('/') ? 'active' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`nav-link text-sm font-medium tracking-tight transition-colors ${
                isActive('/about') ? 'active' : ''
              }`}
            >
              About
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className={`nav-link flex items-center text-sm font-medium tracking-tight transition-colors ${
                location.pathname.startsWith('/services') ? 'active' : ''
              }`}>
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-100 py-2">
                  <Link 
                    to="/services" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
                  >
                    Services Overview
                  </Link>
                  <Link 
                    to="/services/telecom" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
                  >
                    Telecommunications
                  </Link>
                  <Link 
                    to="/services/digital-technology" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
                  >
                    Digital Technology
                  </Link>
                  <Link 
                    to="/services/accounting" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
                  >
                    Management
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/careers" 
              className={`nav-link text-sm font-medium tracking-tight transition-colors ${
                isActive('/careers') ? 'active' : ''
              }`}
            >
              Careers
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link text-sm font-medium tracking-tight transition-colors ${
                isActive('/contact') ? 'active' : ''
              }`}
            >
              Contact
            </Link>
            
            <Button 
              asChild 
              className="cta-primary"
            >
              <Link to="/contact">Get Started</Link>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-primary-700 py-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="nav-link font-medium">Home</Link>
              <Link to="/about" className="nav-link font-medium">About</Link>
              <Link to="/services" className="nav-link font-medium">Services</Link>
              <Link to="/careers" className="nav-link font-medium">Careers</Link>
              <Link to="/contact" className="nav-link font-medium">Contact</Link>
              <Button asChild className="cta-primary w-fit">
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

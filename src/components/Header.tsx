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
      <header className="bg-white shadow-lg border-b border-primary-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/3e7c2dfe-fc30-4af0-8d06-e26ac3d7ec0c.png" 
              alt="Zaytrix Logo" 
              className="block"
              style={{
                height: "48px",
                width: "auto",
                maxHeight: "56px",
                minWidth: "128px",
                objectFit: "contain",
              }}
            />
          </Link>

          <nav className="hidden md:flex space-x-8 items-center">
            <Link 
              to="/" 
              className={`text-primary-800 hover:text-primary-900 text-sm font-medium tracking-tight transition-colors ${
                isActive('/') ? 'text-primary-900' : ''
              }`}
            >
              Home
            </Link>
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className={`text-primary-800 hover:text-primary-900 text-sm font-medium tracking-tight flex items-center transition-colors ${
                  isActive('/services') ? 'text-primary-900' : ''
                }`}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                type="button"
              >
                Services
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {isServicesOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
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
              className={`text-primary-800 hover:text-primary-900 text-sm font-medium tracking-tight transition-colors ${
                isActive('/careers') ? 'text-primary-900' : ''
              }`}
            >
              Careers
            </Link>
            <Link 
              to="/contact" 
              className={`text-primary-800 hover:text-primary-900 text-sm font-medium tracking-tight transition-colors ${
                isActive('/contact') ? 'text-primary-900' : ''
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
              <span className={`bg-primary-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-primary-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-primary-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`text-primary-800 hover:text-primary-900 text-sm font-medium tracking-tight transition-colors ${
                  isActive('/') ? 'text-primary-900' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <div className="relative">
                <button
                  className={`text-primary-800 hover:text-primary-900 text-sm font-medium tracking-tight flex items-center transition-colors ${
                    isActive('/services') ? 'text-primary-900' : ''
                  }`}
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  type="button"
                >
                  Services
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                {isServicesOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    <Link 
                      to="/services/telecom" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Telecommunications
                    </Link>
                    <Link 
                      to="/services/digital-technology" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Digital Technology
                    </Link>
                    <Link 
                      to="/services/accounting" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Management
                    </Link>
                  </div>
                )}
              </div>
              <Link 
                to="/careers" 
                className={`text-primary-800 hover:text-primary-900 text-sm font-medium tracking-tight transition-colors ${
                  isActive('/careers') ? 'text-primary-900' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Careers
              </Link>
              <Link 
                to="/contact" 
                className={`text-primary-800 hover:text-primary-900 text-sm font-medium tracking-tight transition-colors ${
                  isActive('/contact') ? 'text-primary-900' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <Button 
                asChild 
                className="cta-primary"
              >
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

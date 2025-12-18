import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight } from "lucide-react";

const telecomServices = [
  { name: "Network Engineering", href: "/services/telecom/network-engineering" },
  { name: "Fiber Optic Solutions", href: "/services/telecom/fiber-optic" },
  { name: "P25 Public Safety", href: "/services/telecom/p25-solutions" },
  { name: "Safety Code 6 & Spectrum", href: "/services/telecom/safety-code-6" },
  { name: "Private Networks & IoT", href: "/services/telecom/private-networks" },
  { name: "Site Maintenance", href: "/services/telecom/site-maintenance" },
  { name: "Project Management", href: "/services/telecom/project-management" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isTelecomOpen, setIsTelecomOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileTelecomOpen, setMobileTelecomOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg border-b border-primary-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/ZaytrixWebsiteLogo.png" 
              alt="Zaytrix Logo" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-primary-800 hover:text-primary-900 text-sm font-medium tracking-tight transition-colors ${isActive('/') ? 'text-primary-900' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-primary-800 hover:text-primary-900 text-sm font-medium tracking-tight transition-colors ${
                isActive('/about') ? 'text-primary-900' : ''
              }`}
            >
              About
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => {
                setIsServicesOpen(false);
                setIsTelecomOpen(false);
              }}
            >
              <button className={`text-primary-800 hover:text-primary-900 flex items-center text-sm font-medium tracking-tight transition-colors ${location.pathname.startsWith('/services') ? 'text-primary-900' : ''}`}>
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-100 py-2 z-50">
                  <Link 
                    to="/services" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
                  >
                    Services Overview
                  </Link>
                  
                  {/* Telecom Sub-menu */}
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsTelecomOpen(true)}
                    onMouseLeave={() => setIsTelecomOpen(false)}
                  >
                    <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary cursor-pointer">
                      <Link to="/services/telecom" className="flex-1">Telecommunications</Link>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    
                    {isTelecomOpen && (
                      <div className="absolute left-full top-0 ml-1 w-56 bg-white rounded-md shadow-lg border border-gray-100 py-2 z-50">
                        <Link 
                          to="/services/telecom" 
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary font-medium"
                        >
                          All Telecom Services
                        </Link>
                        <div className="border-t border-gray-100 my-1" />
                        {telecomServices.map((service) => (
                          <Link
                            key={service.href}
                            to={service.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                  
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
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-primary-800 hover:text-primary-900 font-medium py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/about" className="text-primary-800 hover:text-primary-900 font-medium py-2" onClick={() => setIsMenuOpen(false)}>About</Link>
              
              {/* Mobile Services Accordion */}
              <div>
                <button 
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full text-primary-800 hover:text-primary-900 font-medium py-2"
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {mobileServicesOpen && (
                  <div className="pl-4 space-y-1 border-l-2 border-primary-200 ml-2">
                    <Link 
                      to="/services" 
                      className="block text-gray-600 hover:text-primary py-1.5 text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Services Overview
                    </Link>
                    
                    {/* Mobile Telecom Sub-accordion */}
                    <div>
                      <button 
                        onClick={() => setMobileTelecomOpen(!mobileTelecomOpen)}
                        className="flex items-center justify-between w-full text-gray-600 hover:text-primary py-1.5 text-sm"
                      >
                        Telecommunications
                        <ChevronDown className={`h-3 w-3 transition-transform ${mobileTelecomOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {mobileTelecomOpen && (
                        <div className="pl-4 space-y-1 border-l border-primary-100 ml-2">
                          <Link 
                            to="/services/telecom" 
                            className="block text-gray-500 hover:text-primary py-1 text-sm font-medium"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            All Telecom Services
                          </Link>
                          {telecomServices.map((service) => (
                            <Link
                              key={service.href}
                              to={service.href}
                              className="block text-gray-500 hover:text-primary py-1 text-sm"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <Link 
                      to="/services/digital-technology" 
                      className="block text-gray-600 hover:text-primary py-1.5 text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Digital Technology
                    </Link>
                    <Link 
                      to="/services/accounting" 
                      className="block text-gray-600 hover:text-primary py-1.5 text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Management
                    </Link>
                  </div>
                )}
              </div>
              
              <Link to="/careers" className="text-primary-800 hover:text-primary-900 font-medium py-2" onClick={() => setIsMenuOpen(false)}>Careers</Link>
              <Link to="/contact" className="text-primary-800 hover:text-primary-900 font-medium py-2" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <Button asChild className="cta-primary w-fit mt-2">
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

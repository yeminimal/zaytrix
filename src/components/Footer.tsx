
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/lovable-uploads/3e7c2dfe-fc30-4af0-8d06-e26ac3d7ec0c.png" 
              alt="Zaytrix Logo" 
              className="h-8 w-auto mb-4"
            />
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Zaytrix is a multidisciplinary Canadian company offering comprehensive services in Telecommunications, Digital Technology, and Accounting. We build trust through innovation and excellence.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-tight">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/telecom" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Telecommunications
                </Link>
              </li>
              <li>
                <Link to="/services/digital-technology" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Digital Technology
                </Link>
              </li>
              <li>
                <Link to="/services/accounting" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Accounting
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-tight">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zaytrix. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Proudly Canadian 🇨🇦
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

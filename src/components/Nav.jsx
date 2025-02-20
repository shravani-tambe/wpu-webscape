import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const links = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Projects", path: "/projects" },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold">
            Tech Innovators Club
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`hover:text-blue-200 transition-colors ${
                  location.pathname === link.path
                    ? "text-white border-b-2 border-blue-400"
                    : "text-blue-100"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-blue-800 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block py-2 hover:bg-blue-800 px-4 rounded transition-colors ${
                  location.pathname === link.path ? "bg-blue-800" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

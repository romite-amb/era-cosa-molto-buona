import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-lg font-medium text-teal-800">
              Era cosa{" "}
              <span className="text-orange-500 italic">molto buona.</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#esperienza"
              className="text-sm font-medium text-teal-700 hover:text-orange-500 transition-colors"
            >
              L'Esperienza
            </a>
            <a
              href="#periodi"
              className="text-sm font-medium text-teal-700 hover:text-orange-500 transition-colors"
            >
              Date
            </a>
            <a
              href="#contatti"
              className="text-sm font-medium text-teal-700 hover:text-orange-500 transition-colors"
            >
              Iscriviti
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-teal-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a
                href="#esperienza"
                className="text-sm font-medium text-teal-700 hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                L'Esperienza
              </a>
              <a
                href="#periodi"
                className="text-sm font-medium text-teal-700 hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Date
              </a>
              <a
                href="#contatti"
                className="text-sm font-medium text-teal-700 hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Iscriviti
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
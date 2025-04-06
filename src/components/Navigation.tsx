
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-church-red flex items-center justify-center text-white font-serif text-xl">
              F
            </div>
            <span className="ml-3 text-xl font-serif text-church-red hidden sm:block">Faith Church</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-church-red transition-colors">
              Home
            </Link>
            <Link to="/bible-study" className="text-gray-700 hover:text-church-red transition-colors">
              Bible Study
            </Link>
            <Link to="/calendar" className="text-gray-700 hover:text-church-red transition-colors">
              Calendar
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-church-red transition-colors">
              Contact
            </Link>
            <Link to="/admin" className="text-gray-700 hover:text-church-red transition-colors">
              Admin
            </Link>
            <Button size="sm" className="bg-church-red hover:bg-church-red-light ml-2">
              <Link to="/contact" className="text-white">
                Join Us
              </Link>
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4 pb-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-church-red transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/bible-study" 
                className="text-gray-700 hover:text-church-red transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Bible Study
              </Link>
              <Link 
                to="/calendar" 
                className="text-gray-700 hover:text-church-red transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Calendar
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-church-red transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/admin" 
                className="text-gray-700 hover:text-church-red transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Admin
              </Link>
              <Button className="bg-church-red hover:bg-church-red-light w-full mt-2">
                <Link 
                  to="/contact" 
                  className="text-white block w-full"
                  onClick={() => setMenuOpen(false)}
                >
                  Join Us
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;

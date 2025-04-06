
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Book, Calendar, MessageSquare, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="section-container flex justify-between items-center py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-10 w-10 bg-church-red rounded-full flex items-center justify-center">
            <span className="text-white font-serif font-bold">FC</span>
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-church-red">Faith Church</h1>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <NavLinks />
          <Button className="bg-church-red hover:bg-church-red-light">
            Donate
          </Button>
        </div>
        
        <button 
          className="md:hidden text-church-red"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      <div className={cn(
        "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
        isMenuOpen ? "max-h-60" : "max-h-0"
      )}>
        <div className="px-4 py-2 flex flex-col gap-2">
          <MobileNavLinks onClick={() => setIsMenuOpen(false)} />
          <Button className="bg-church-red hover:bg-church-red-light w-full">
            Donate
          </Button>
        </div>
      </div>
    </header>
  );
};

const NavLinks = () => (
  <nav>
    <ul className="flex gap-6 items-center">
      <li>
        <Link to="/" className="flex items-center gap-1 text-church-red hover:text-church-red-light">
          Home
        </Link>
      </li>
      <li>
        <Link to="/bible-study" className="flex items-center gap-1 text-church-red hover:text-church-red-light">
          <Book size={18} />
          Bible Study
        </Link>
      </li>
      <li>
        <Link to="/calendar" className="flex items-center gap-1 text-church-red hover:text-church-red-light">
          <Calendar size={18} />
          Calendar
        </Link>
      </li>
      <li>
        <Link to="/contact" className="flex items-center gap-1 text-church-red hover:text-church-red-light">
          <MessageSquare size={18} />
          Contact
        </Link>
      </li>
    </ul>
  </nav>
);

const MobileNavLinks = ({ onClick }: { onClick: () => void }) => (
  <nav>
    <ul className="flex flex-col gap-3">
      <li>
        <Link 
          to="/" 
          className="block py-2 text-church-red hover:bg-church-green rounded px-2"
          onClick={onClick}
        >
          Home
        </Link>
      </li>
      <li>
        <Link 
          to="/bible-study" 
          className="block py-2 text-church-red hover:bg-church-green rounded px-2 flex items-center gap-2"
          onClick={onClick}
        >
          <Book size={18} />
          Bible Study
        </Link>
      </li>
      <li>
        <Link 
          to="/calendar" 
          className="block py-2 text-church-red hover:bg-church-green rounded px-2 flex items-center gap-2"
          onClick={onClick}
        >
          <Calendar size={18} />
          Calendar
        </Link>
      </li>
      <li>
        <Link 
          to="/contact" 
          className="block py-2 text-church-red hover:bg-church-green rounded px-2 flex items-center gap-2"
          onClick={onClick}
        >
          <MessageSquare size={18} />
          Contact
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;

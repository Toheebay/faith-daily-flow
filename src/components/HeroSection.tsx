
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-church-red to-church-red-light text-white py-16 md:py-24">
      <div className="section-container">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Welcome to Faith Church
          </h1>
          <p className="text-lg md:text-xl mb-6 text-church-cream">
            Growing in faith together through God's word, fellowship, and service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-white text-church-red hover:bg-church-cream">
              <Link to="/calendar">
                View Activities
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/bible-study">
                Join Bible Study
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-16 bg-[url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201440%20320%22%3E%3Cpath%20fill%3D%22%23F2FCE2%22%20fill-opacity%3D%221%22%20d%3D%22M0%2C288L48%2C272C96%2C256%2C192%2C224%2C288%2C213.3C384%2C203%2C480%2C213%2C576%2C229.3C672%2C245%2C768%2C267%2C864%2C261.3C960%2C256%2C1056%2C224%2C1152%2C218.7C1248%2C213%2C1344%2C235%2C1392%2C245.3L1440%2C256L1440%2C320L1392%2C320C1344%2C320%2C1248%2C320%2C1152%2C320C1056%2C320%2C960%2C320%2C864%2C320C768%2C320%2C672%2C320%2C576%2C320C480%2C320%2C384%2C320%2C288%2C320C192%2C320%2C96%2C320%2C48%2C320L0%2C320Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E')]"></div>
    </div>
  );
};

export default HeroSection;

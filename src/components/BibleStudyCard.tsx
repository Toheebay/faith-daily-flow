
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface BibleStudyCardProps {
  title: string;
  description: string;
  date: string;
  time: string;
  leader: string;
  location: string;
  category: string;
  featured?: boolean;
}

const BibleStudyCard: React.FC<BibleStudyCardProps> = ({
  title,
  description,
  date,
  time,
  leader,
  location,
  category,
  featured = false
}) => {
  return (
    <Card className={`overflow-hidden border ${featured ? 'border-church-red shadow-lg' : 'border-gray-200'}`}>
      <div className={`p-5 ${featured ? 'bg-gradient-to-r from-church-red to-church-red-light text-white' : 'bg-white'}`}>
        <div className="flex justify-between items-start mb-4">
          <h3 className={`text-xl font-serif ${featured ? 'text-white' : 'text-church-red'}`}>{title}</h3>
          {featured && <Badge className="bg-church-gold text-black">Featured</Badge>}
          {!featured && <Badge className="bg-church-green-dark text-church-red">{category}</Badge>}
        </div>
        
        <p className={`mb-4 ${featured ? 'text-church-cream' : 'text-gray-700'}`}>
          {description}
        </p>
        
        <div className={`grid grid-cols-2 gap-3 text-sm mb-4 ${featured ? 'text-church-cream' : 'text-gray-600'}`}>
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-1">
            <User size={16} />
            <span>{leader}</span>
          </div>
          <div>
            <span className="ml-5">{location}</span>
          </div>
        </div>
        
        <Button className={`w-full ${featured ? 'bg-white text-church-red hover:bg-church-cream' : 'bg-church-red hover:bg-church-red-light text-white'}`}>
          Join Study
        </Button>
      </div>
    </Card>
  );
};

export default BibleStudyCard;

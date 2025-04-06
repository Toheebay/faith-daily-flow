
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Simulated daily reading data
// In a real implementation, this would be fetched from a Facebook API
const dailyReading = {
  date: new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  title: "Finding Peace in God's Word",
  verse: "Psalm 119:105",
  verseText: "Your word is a lamp for my feet, a light on my path.",
  reflection: "In times of uncertainty and darkness, God's Word illuminates our path and guides our steps. Through scripture, we find direction, purpose, and hope for our journey.",
  prayer: "Lord, thank you for your Word that guides us. Help us to trust in your direction and find peace in your promises. Amen."
};

const DailyReading: React.FC = () => {
  return (
    <Card className="bg-white shadow-md rounded-lg overflow-hidden border-t-4 border-church-red">
      <div className="p-6">
        <div className="mb-4">
          <span className="text-sm text-church-red-light">{dailyReading.date}</span>
          <h3 className="text-2xl font-serif mt-1">{dailyReading.title}</h3>
        </div>
        
        <div className="bible-quote">
          <p className="font-medium mb-2">{dailyReading.verse}</p>
          <p className="text-lg">{dailyReading.verseText}</p>
        </div>
        
        <div className="mb-6">
          <h4 className="font-serif text-lg mb-2 text-church-red">Reflection</h4>
          <p>{dailyReading.reflection}</p>
        </div>
        
        <div className="mb-6">
          <h4 className="font-serif text-lg mb-2 text-church-red">Prayer</h4>
          <p>{dailyReading.prayer}</p>
        </div>
        
        <div className="flex justify-between items-center border-t border-gray-200 pt-4 mt-4">
          <span className="text-sm text-gray-500">
            Follow us on Facebook for daily updates
          </span>
          <Button className="bg-church-red hover:bg-church-red-light">
            <svg className="h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            Share
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default DailyReading;

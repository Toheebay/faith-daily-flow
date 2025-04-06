
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Simulated weekly activities data
const weeklyActivities = [
  {
    day: 'Sunday',
    activities: [
      { time: '9:00 AM', title: 'Sunday School', location: 'Main Hall' },
      { time: '11:00 AM', title: 'Morning Worship Service', location: 'Sanctuary' },
      { time: '6:00 PM', title: 'Evening Service', location: 'Chapel' }
    ]
  },
  {
    day: 'Monday',
    activities: [
      { time: '6:30 PM', title: 'Youth Bible Study', location: 'Youth Room' }
    ]
  },
  {
    day: 'Tuesday',
    activities: [
      { time: '10:00 AM', title: 'Women\'s Prayer Group', location: 'Room 201' },
      { time: '7:00 PM', title: 'Men\'s Fellowship', location: 'Fellowship Hall' }
    ]
  },
  {
    day: 'Wednesday',
    activities: [
      { time: '7:00 PM', title: 'Midweek Bible Study', location: 'Sanctuary' },
      { time: '7:00 PM', title: 'Children\'s Program', location: 'Children\'s Wing' }
    ]
  },
  {
    day: 'Thursday',
    activities: [
      { time: '6:00 PM', title: 'Choir Practice', location: 'Choir Room' }
    ]
  },
  {
    day: 'Friday',
    activities: [
      { time: '6:30 PM', title: 'Prayer Meeting', location: 'Chapel' },
      { time: '7:30 PM', title: 'Young Adults Group', location: 'Fellowship Hall' }
    ]
  },
  {
    day: 'Saturday',
    activities: [
      { time: '9:00 AM', title: 'Community Service Day', location: 'Meet in Parking Lot' },
      { time: '4:00 PM', title: 'Marriage Enrichment Class', location: 'Room 105' }
    ]
  }
];

const WeeklyCalendar: React.FC = () => {
  // Find today's day to highlight it
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {weeklyActivities.map((daySchedule) => (
        <Card 
          key={daySchedule.day} 
          className={`activity-card ${daySchedule.day === today ? 'border-2 border-church-red' : ''}`}
        >
          <div className="activity-card-header">
            <h3 className="font-semibold">{daySchedule.day}</h3>
            {daySchedule.day === today && (
              <Badge className="bg-church-gold text-black ml-2">Today</Badge>
            )}
          </div>
          <div className="activity-card-body">
            {daySchedule.activities.length > 0 ? (
              <ul className="space-y-3">
                {daySchedule.activities.map((activity, index) => (
                  <li key={index} className="border-b border-gray-100 last:border-0 pb-2 last:pb-0">
                    <p className="font-medium text-church-red">{activity.time}</p>
                    <p className="font-medium">{activity.title}</p>
                    <p className="text-sm text-gray-600">{activity.location}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 italic">No activities scheduled</p>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default WeeklyCalendar;

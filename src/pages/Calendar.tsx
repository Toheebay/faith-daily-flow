
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WeeklyCalendar from '@/components/WeeklyCalendar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';

const Calendar = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-church-red text-white py-12">
          <div className="section-container">
            <h1 className="text-3xl md:text-4xl font-serif text-white mb-4">Church Calendar</h1>
            <p className="text-lg text-church-cream max-w-2xl">
              Stay connected with all our activities and events happening throughout the week. 
              There's something for everyone in our Faith community.
            </p>
          </div>
        </section>
        
        {/* Calendar Section */}
        <section className="section-container py-12">
          <Tabs defaultValue="weekly">
            <TabsList className="w-full flex mb-8">
              <TabsTrigger value="weekly" className="flex-1">Weekly View</TabsTrigger>
              <TabsTrigger value="monthly" className="flex-1">Monthly View</TabsTrigger>
              <TabsTrigger value="upcoming" className="flex-1">Upcoming Events</TabsTrigger>
            </TabsList>
            
            <TabsContent value="weekly" className="pt-4">
              <WeeklyCalendar />
            </TabsContent>
            
            <TabsContent value="monthly">
              <Card className="p-8 text-center">
                <h3 className="text-xl font-serif text-church-red mb-3">Monthly Calendar View</h3>
                <p className="text-gray-600">
                  Our monthly view is currently being updated with our latest events. 
                  Please check back soon or view our weekly calendar for current activities.
                </p>
              </Card>
            </TabsContent>
            
            <TabsContent value="upcoming">
              <div className="space-y-6">
                <h3 className="text-xl font-serif text-church-red mb-3">Upcoming Special Events</h3>
                
                <div className="space-y-4">
                  <Card className="p-6">
                    <div className="flex flex-col md:flex-row gap-4 md:items-center">
                      <div className="bg-church-red text-white p-3 rounded-md text-center min-w-[80px]">
                        <div className="text-xl font-bold">15</div>
                        <div className="text-sm">April</div>
                      </div>
                      
                      <div className="flex-grow">
                        <h4 className="text-lg font-serif text-church-red">Spring Revival Services</h4>
                        <p className="text-sm text-gray-600">7:00 PM - 9:00 PM • Main Sanctuary</p>
                        <p className="mt-2">Three nights of worship, prayer, and powerful preaching to renew your faith.</p>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-6">
                    <div className="flex flex-col md:flex-row gap-4 md:items-center">
                      <div className="bg-church-red text-white p-3 rounded-md text-center min-w-[80px]">
                        <div className="text-xl font-bold">22</div>
                        <div className="text-sm">April</div>
                      </div>
                      
                      <div className="flex-grow">
                        <h4 className="text-lg font-serif text-church-red">Community Service Day</h4>
                        <p className="text-sm text-gray-600">9:00 AM - 2:00 PM • Meet in Church Parking Lot</p>
                        <p className="mt-2">Join us as we serve our local community through various outreach projects.</p>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-6">
                    <div className="flex flex-col md:flex-row gap-4 md:items-center">
                      <div className="bg-church-red text-white p-3 rounded-md text-center min-w-[80px]">
                        <div className="text-xl font-bold">30</div>
                        <div className="text-sm">April</div>
                      </div>
                      
                      <div className="flex-grow">
                        <h4 className="text-lg font-serif text-church-red">Family Movie Night</h4>
                        <p className="text-sm text-gray-600">6:30 PM - 9:00 PM • Fellowship Hall</p>
                        <p className="mt-2">Bring the whole family for a night of fun with a faith-based movie and refreshments.</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>
        
        {/* Calendar Information Section */}
        <section className="bg-white py-12">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-serif text-church-red mb-4">Regular Weekly Services</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <div className="font-medium w-28">Sunday:</div>
                    <div>
                      <p>9:00 AM - Sunday School</p>
                      <p>11:00 AM - Morning Worship</p>
                      <p>6:00 PM - Evening Service</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="font-medium w-28">Wednesday:</div>
                    <div>
                      <p>7:00 PM - Bible Study</p>
                      <p>7:00 PM - Youth Group</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="font-medium w-28">Friday:</div>
                    <div>
                      <p>6:30 PM - Prayer Meeting</p>
                    </div>
                  </li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-serif text-church-red mb-4">Calendar Information</h3>
                <p className="mb-4">
                  Our church calendar is regularly updated with all services, Bible studies, and special events. 
                  If you have questions about any activities or would like to suggest an event, please contact 
                  the church office.
                </p>
                <p className="mb-4">
                  <span className="font-medium">Phone:</span> (555) 123-4567<br />
                  <span className="font-medium">Email:</span> calendar@faithchurch.org
                </p>
                <p className="text-sm text-gray-600">
                  * Calendar events may be subject to change. Please check our Facebook page or call the church 
                  office for the most up-to-date information.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Calendar;

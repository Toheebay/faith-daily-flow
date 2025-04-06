
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import DailyReading from '@/components/DailyReading';
import WeeklyCalendar from '@/components/WeeklyCalendar';
import FacebookFeed from '@/components/FacebookFeed';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import BibleStudyCard from '@/components/BibleStudyCard';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  // Featured Bible study for homepage
  const featuredStudy = {
    title: "Understanding the Beatitudes",
    description: "Dive deep into the teachings of Jesus in Matthew 5 and discover the path to true blessing and happiness.",
    date: "Every Wednesday",
    time: "7:00 PM - 8:30 PM",
    leader: "Pastor Richardson",
    location: "Main Sanctuary",
    category: "New Testament"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <HeroSection />
      
      <main>
        {/* Welcome Section */}
        <section className="section-container py-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif mb-6">Welcome to Our Faith Community</h2>
            <p className="mb-8 text-lg">
              At Faith Church, we are dedicated to spreading God's word and growing together in faith. 
              Join us for worship, bible study, and community service as we walk with Christ.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-church-red hover:bg-church-red-light">
                <Link to="/calendar">View Schedule</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-church-red text-church-red hover:bg-church-red/10">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
        
        <Separator className="bg-church-red/10" />
        
        {/* Daily Reading Section */}
        <section className="section-container py-12 bg-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif mb-2">Today's Daily Reading</h2>
            <p className="text-gray-600">Find peace and guidance in today's scripture</p>
          </div>
          <DailyReading />
        </section>
        
        <Separator className="bg-church-red/10" />
        
        {/* Two Column Section: Featured Study & Facebook Feed */}
        <section className="section-container py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-serif text-church-red mb-6">Featured Bible Study</h2>
              <BibleStudyCard 
                title={featuredStudy.title}
                description={featuredStudy.description}
                date={featuredStudy.date}
                time={featuredStudy.time}
                leader={featuredStudy.leader}
                location={featuredStudy.location}
                category={featuredStudy.category}
                featured={true}
              />
              <div className="mt-4 text-center">
                <Button asChild variant="outline" className="border-church-red text-church-red hover:bg-church-red/10">
                  <Link to="/bible-study">View All Bible Studies</Link>
                </Button>
              </div>
            </div>
            
            <div>
              <FacebookFeed />
            </div>
          </div>
        </section>
        
        <Separator className="bg-church-red/10" />
        
        {/* Weekly Calendar Preview */}
        <section className="section-container py-12 bg-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif mb-2">This Week at Faith Church</h2>
            <p className="text-gray-600 mb-6">Join us for these activities and grow in faith together</p>
            <div className="overflow-x-auto pb-6">
              <WeeklyCalendar />
            </div>
            <Button asChild className="mt-8 bg-church-red hover:bg-church-red-light">
              <Link to="/calendar">View Full Calendar</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

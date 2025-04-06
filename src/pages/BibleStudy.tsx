
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BibleStudyCard from '@/components/BibleStudyCard';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

// Sample Bible study data
const bibleStudies = [
  {
    id: 1,
    title: "Understanding the Beatitudes",
    description: "Dive deep into the teachings of Jesus in Matthew 5 and discover the path to true blessing and happiness.",
    date: "Every Wednesday",
    time: "7:00 PM - 8:30 PM",
    leader: "Pastor Richardson",
    location: "Main Sanctuary",
    category: "New Testament",
    featured: true
  },
  {
    id: 2,
    title: "Book of Romans Study",
    description: "Explore Paul's profound theological insights in the Book of Romans and their relevance for Christians today.",
    date: "Every Monday",
    time: "6:30 PM - 8:00 PM",
    leader: "Elder Thompson",
    location: "Fellowship Hall",
    category: "New Testament"
  },
  {
    id: 3,
    title: "Psalms: Songs of the Heart",
    description: "Journey through the Psalms to discover how these ancient prayers speak to our modern struggles and celebrations.",
    date: "Every Thursday",
    time: "10:00 AM - 11:30 AM",
    leader: "Sister Mary Johnson",
    location: "Room 201",
    category: "Old Testament"
  },
  {
    id: 4,
    title: "Genesis: Beginnings",
    description: "Study the book of beginnings and explore the foundational stories of creation, fall, and God's covenant promises.",
    date: "Tuesdays",
    time: "7:00 PM - 8:30 PM",
    leader: "Pastor Adams",
    location: "Chapel",
    category: "Old Testament"
  },
  {
    id: 5,
    title: "The Parables of Jesus",
    description: "Unpack the rich meanings behind Jesus' parables and how they challenge us to live differently today.",
    date: "Fridays",
    time: "6:00 PM - 7:30 PM",
    leader: "Deacon Williams",
    location: "Youth Room",
    category: "New Testament"
  },
  {
    id: 6,
    title: "Revelation: Hope in Troubled Times",
    description: "Gain a clearer understanding of the Book of Revelation and its message of hope for believers facing persecution.",
    date: "Saturdays",
    time: "9:00 AM - 10:30 AM",
    leader: "Dr. Sarah Martin",
    location: "Library",
    category: "New Testament"
  }
];

const BibleStudy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-church-red text-white py-12">
          <div className="section-container">
            <h1 className="text-3xl md:text-4xl font-serif text-white mb-4">Bible Study Programs</h1>
            <p className="text-lg text-church-cream max-w-2xl">
              Deepen your understanding of Scripture through our various Bible study programs 
              designed for all ages and levels of spiritual growth.
            </p>
          </div>
        </section>
        
        {/* Filters Section */}
        <section className="bg-white py-6 border-b">
          <div className="section-container">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input placeholder="Search studies..." className="pl-10" />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="new-testament">New Testament</SelectItem>
                    <SelectItem value="old-testament">Old Testament</SelectItem>
                    <SelectItem value="topical">Topical Studies</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Day" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Days</SelectItem>
                    <SelectItem value="monday">Monday</SelectItem>
                    <SelectItem value="tuesday">Tuesday</SelectItem>
                    <SelectItem value="wednesday">Wednesday</SelectItem>
                    <SelectItem value="thursday">Thursday</SelectItem>
                    <SelectItem value="friday">Friday</SelectItem>
                    <SelectItem value="saturday">Saturday</SelectItem>
                    <SelectItem value="sunday">Sunday</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>
        
        {/* Bible Studies Section */}
        <section className="section-container py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bibleStudies.map(study => (
              <BibleStudyCard 
                key={study.id}
                title={study.title}
                description={study.description}
                date={study.date}
                time={study.time}
                leader={study.leader}
                location={study.location}
                category={study.category}
                featured={study.featured}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="mb-4 text-gray-700">Don't see a study that fits your schedule?</p>
            <Button className="bg-church-red hover:bg-church-red-light">
              Request a New Bible Study
            </Button>
          </div>
        </section>
        
        {/* Resources Section */}
        <section className="bg-white py-12">
          <div className="section-container">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-serif text-church-red mb-2">Bible Study Resources</h2>
              <p className="text-gray-600">Helpful tools and materials for your personal Bible study</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-church-green p-6 rounded-lg">
                <h3 className="text-xl font-serif text-church-red mb-3">Study Guides</h3>
                <p className="mb-4">Download free study guides to accompany our Bible studies.</p>
                <Button variant="outline" className="border-church-red text-church-red hover:bg-church-red/10">
                  Download Guides
                </Button>
              </div>
              
              <div className="bg-church-green p-6 rounded-lg">
                <h3 className="text-xl font-serif text-church-red mb-3">Online Library</h3>
                <p className="mb-4">Access our digital library of commentaries and theological resources.</p>
                <Button variant="outline" className="border-church-red text-church-red hover:bg-church-red/10">
                  Browse Library
                </Button>
              </div>
              
              <div className="bg-church-green p-6 rounded-lg">
                <h3 className="text-xl font-serif text-church-red mb-3">Video Archives</h3>
                <p className="mb-4">Watch recordings of previous Bible studies and sermons.</p>
                <Button variant="outline" className="border-church-red text-church-red hover:bg-church-red/10">
                  Watch Videos
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BibleStudy;

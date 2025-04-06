
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BibleStudyManager from '@/components/admin/BibleStudyManager';
import MediaManager from '@/components/admin/MediaManager';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Admin = () => {
  const [activeTab, setActiveTab] = useState<string>("bible-studies");
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main>
        {/* Admin Header */}
        <section className="bg-church-red text-white py-8">
          <div className="section-container">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h1 className="text-3xl md:text-4xl font-serif text-white">Admin Dashboard</h1>
              <Button asChild variant="outline" className="bg-white hover:bg-church-cream text-church-red">
                <Link to="/" className="flex items-center gap-2">
                  <ArrowLeft size={16} />
                  Back to Website
                </Link>
              </Button>
            </div>
            <p className="mt-2 text-church-cream">
              Manage bible studies, upload media, and administer church content.
            </p>
          </div>
        </section>
        
        {/* Admin Content */}
        <section className="section-container py-8">
          <Tabs 
            defaultValue="bible-studies" 
            value={activeTab} 
            onValueChange={setActiveTab} 
            className="w-full"
          >
            <TabsList className="mb-8 w-full justify-start">
              <TabsTrigger value="bible-studies">Bible Studies</TabsTrigger>
              <TabsTrigger value="media">Media Gallery</TabsTrigger>
            </TabsList>
            
            <TabsContent value="bible-studies">
              <BibleStudyManager />
            </TabsContent>
            
            <TabsContent value="media">
              <MediaManager />
            </TabsContent>
          </Tabs>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Admin;

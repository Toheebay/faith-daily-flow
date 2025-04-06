import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BibleStudyManager from '@/components/admin/BibleStudyManager';
import MediaManager from '@/components/admin/MediaManager';
import StudyGuidesManager from '@/components/admin/StudyGuidesManager';
import LibraryManager from '@/components/admin/LibraryManager';
import VideoArchiveManager from '@/components/admin/VideoArchiveManager';
import AdminLogin from '@/components/admin/AdminLogin';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ArrowLeft, LogOut } from 'lucide-react';
import { useAdminAuth } from '@/hooks/use-admin-auth';

const Admin = () => {
  const [activeTab, setActiveTab] = useState<string>("bible-studies");
  const { isAuthenticated, login, logout } = useAdminAuth();
  
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        
        <main>
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
          
          <section className="section-container py-8">
            <AdminLogin onLogin={login} />
          </section>
        </main>
        
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main>
        <section className="bg-church-red text-white py-8">
          <div className="section-container">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h1 className="text-3xl md:text-4xl font-serif text-white">Admin Dashboard</h1>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  className="bg-white hover:bg-church-cream text-church-red"
                  onClick={logout}
                >
                  <LogOut size={16} className="mr-2" />
                  Logout
                </Button>
                <Button asChild variant="outline" className="bg-white hover:bg-church-cream text-church-red">
                  <Link to="/" className="flex items-center gap-2">
                    <ArrowLeft size={16} />
                    Back to Website
                  </Link>
                </Button>
              </div>
            </div>
            <p className="mt-2 text-church-cream">
              Manage bible studies, study guides, library resources, and video archives for the church.
            </p>
          </div>
        </section>
        
        <section className="section-container py-8">
          <Tabs 
            defaultValue="bible-studies" 
            value={activeTab} 
            onValueChange={setActiveTab} 
            className="w-full"
          >
            <TabsList className="mb-8 w-full justify-start flex flex-wrap">
              <TabsTrigger value="bible-studies">Bible Studies</TabsTrigger>
              <TabsTrigger value="study-guides">Study Guides</TabsTrigger>
              <TabsTrigger value="library">Online Library</TabsTrigger>
              <TabsTrigger value="videos">Video Archives</TabsTrigger>
              <TabsTrigger value="media">Media Gallery</TabsTrigger>
            </TabsList>
            
            <TabsContent value="bible-studies">
              <BibleStudyManager />
            </TabsContent>
            
            <TabsContent value="study-guides">
              <StudyGuidesManager />
            </TabsContent>
            
            <TabsContent value="library">
              <LibraryManager />
            </TabsContent>
            
            <TabsContent value="videos">
              <VideoArchiveManager />
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

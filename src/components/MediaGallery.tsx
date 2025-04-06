
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Image, Video, ExternalLink } from 'lucide-react';

// Sample media data
const images = [
  { id: 1, title: "Sunday Worship", url: "https://images.unsplash.com/photo-1473177104440-ffee2f376098", category: "Worship" },
  { id: 2, title: "Youth Group", url: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81", category: "Youth" }
];

const videos = [
  { id: 1, title: "Easter Service", url: "https://example.com/video1.mp4", category: "Special Events" },
  { id: 2, title: "Sermon: Grace and Truth", url: "https://example.com/video2.mp4", category: "Sermons" }
];

const MediaGallery = () => {
  const [activeTab, setActiveTab] = useState<string>("images");
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-serif text-church-red">Media Gallery</h2>
        <Button 
          asChild
          variant="outline" 
          className="text-church-red border-church-red hover:bg-church-red/10"
        >
          <a href="/admin" className="inline-flex items-center gap-1">
            View All <ExternalLink size={16} />
          </a>
        </Button>
      </div>
      
      <Tabs defaultValue="images" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="images" className="flex items-center gap-2">
            <Image size={16} />
            Images
          </TabsTrigger>
          <TabsTrigger value="videos" className="flex items-center gap-2">
            <Video size={16} />
            Videos
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="images" className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {images.map((image) => (
              <Card key={image.id} className="overflow-hidden">
                <div className="h-48">
                  <img 
                    src={image.url} 
                    alt={image.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-medium">{image.title}</h3>
                  <div className="mt-1">
                    <span className="inline-block text-xs bg-church-green px-2 py-1 rounded">
                      {image.category}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="videos" className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {videos.map((video) => (
              <Card key={video.id} className="overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <Video size={48} className="text-gray-400" />
                </div>
                <div className="p-3">
                  <h3 className="font-medium">{video.title}</h3>
                  <div className="mt-1">
                    <span className="inline-block text-xs bg-church-green px-2 py-1 rounded">
                      {video.category}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MediaGallery;

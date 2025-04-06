
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Image, Video, UploadCloud, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Sample media data with explicitly typed 'type' property
const sampleImages = [
  { id: 1, title: "Sunday Worship", type: "image" as const, url: "https://images.unsplash.com/photo-1473177104440-ffee2f376098", category: "Worship", description: "Sunday morning gathering" },
  { id: 2, title: "Youth Group", type: "image" as const, url: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81", category: "Youth", description: "Weekly youth meeting" }
];

const sampleVideos = [
  { id: 1, title: "Easter Service", type: "video" as const, url: "https://example.com/video1.mp4", category: "Special Events", description: "Recording of our Easter celebration" },
  { id: 2, title: "Sermon: Grace and Truth", type: "video" as const, url: "https://example.com/video2.mp4", category: "Sermons", description: "Pastor's message from John 1" }
];

interface Media {
  id: number;
  title: string;
  type: 'image' | 'video';
  url: string;
  category: string;
  description: string;
}

const MediaManager = () => {
  const [activeTab, setActiveTab] = useState<string>("images");
  const [images, setImages] = useState<Media[]>(sampleImages);
  const [videos, setVideos] = useState<Media[]>(sampleVideos);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [formData, setFormData] = useState<Omit<Media, 'id'>>({
    title: '',
    type: 'image',
    url: '',
    category: 'Worship',
    description: ''
  });
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const categories = {
    image: ['Worship', 'Youth', 'Community', 'Events', 'Outreach', 'Missions'],
    video: ['Sermons', 'Worship', 'Testimonials', 'Special Events', 'Bible Studies']
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTypeChange = (type: 'image' | 'video') => {
    setFormData(prev => ({
      ...prev,
      type,
      category: type === 'image' ? 'Worship' : 'Sermons'
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      // In a real implementation, you'd upload to a storage service
      // For now, we'll use a fake URL
      const fakeUrl = URL.createObjectURL(file);
      setFormData(prev => ({ ...prev, url: fakeUrl }));
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      type: 'image',
      url: '',
      category: 'Worship',
      description: ''
    });
    setIsUploading(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const mediaType = formData.type;
    const newId = Math.max(0, ...(mediaType === 'image' ? images : videos).map(item => item.id)) + 1;
    const newMedia = { id: newId, ...formData };
    
    if (mediaType === 'image') {
      setImages(prev => [...prev, newMedia as Media]);
    } else {
      setVideos(prev => [...prev, newMedia as Media]);
    }
    
    toast({
      title: `${mediaType === 'image' ? 'Image' : 'Video'} Uploaded`,
      description: `${formData.title} has been successfully uploaded.`,
    });
    
    resetForm();
  };

  const handleDelete = (id: number, type: 'image' | 'video') => {
    if (type === 'image') {
      setImages(prev => prev.filter(item => item.id !== id));
    } else {
      setVideos(prev => prev.filter(item => item.id !== id));
    }
    
    toast({
      title: `${type === 'image' ? 'Image' : 'Video'} Removed`,
      description: "The media item has been successfully removed.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-serif text-church-red">Media Gallery Manager</h2>
        <Button 
          onClick={() => setIsUploading(!isUploading)} 
          className="bg-church-red hover:bg-church-red-light flex items-center gap-2"
        >
          {isUploading ? 'Cancel' : <><UploadCloud size={16} /> Upload Media</>}
        </Button>
      </div>

      {isUploading && (
        <Card className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-wrap gap-4 mb-4">
              <Button
                type="button"
                onClick={() => handleTypeChange('image')}
                variant={formData.type === 'image' ? 'default' : 'outline'}
                className={formData.type === 'image' ? 'bg-church-red hover:bg-church-red-light' : ''}
              >
                <Image size={16} className="mr-2" />
                Image
              </Button>
              <Button
                type="button"
                onClick={() => handleTypeChange('video')}
                variant={formData.type === 'video' ? 'default' : 'outline'}
                className={formData.type === 'video' ? 'bg-church-red hover:bg-church-red-light' : ''}
              >
                <Video size={16} className="mr-2" />
                Video
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input 
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select 
                  value={formData.category}
                  onValueChange={(value) => handleSelectChange('category', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories[formData.type].map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="file">Upload {formData.type === 'image' ? 'Image' : 'Video'}</Label>
                <Input 
                  id="file"
                  type="file"
                  accept={formData.type === 'image' ? 'image/*' : 'video/*'}
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  required={!formData.url}
                />
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={3}
                  required
                />
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button 
                type="submit" 
                className="bg-church-red hover:bg-church-red-light"
              >
                Upload {formData.type === 'image' ? 'Image' : 'Video'}
              </Button>
            </div>
          </form>
        </Card>
      )}

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
        
        <TabsContent value="images">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((image) => (
              <Card key={image.id} className="overflow-hidden">
                <div className="relative h-40">
                  <img 
                    src={image.url} 
                    alt={image.title} 
                    className="w-full h-full object-cover"
                  />
                  <Button
                    onClick={() => handleDelete(image.id, 'image')}
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2 h-7 w-7 rounded-full"
                  >
                    <X size={14} />
                  </Button>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">{image.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{image.description}</p>
                  <div className="mt-2">
                    <span className="inline-block text-xs bg-church-green px-2 py-1 rounded">
                      {image.category}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="videos">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {videos.map((video) => (
              <Card key={video.id} className="overflow-hidden">
                <div className="relative h-40 bg-gray-200 flex items-center justify-center">
                  <Video size={48} className="text-gray-400" />
                  <Button
                    onClick={() => handleDelete(video.id, 'video')}
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2 h-7 w-7 rounded-full"
                  >
                    <X size={14} />
                  </Button>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">{video.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{video.description}</p>
                  <div className="mt-2">
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

export default MediaManager;

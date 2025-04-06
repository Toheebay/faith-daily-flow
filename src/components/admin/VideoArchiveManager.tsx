
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { PlusCircle, Trash2, Save, Video } from 'lucide-react';

// Sample data - in a real app, this would come from a database
const initialVideos = [
  {
    id: 1,
    title: "Sunday Sermon - Finding Peace in Turbulent Times",
    preacher: "Pastor Johnson",
    date: "2023-09-10",
    category: "Sermon",
    description: "A message about finding God's peace during difficult times",
    thumbnailUrl: "https://placehold.co/300x180",
    videoUrl: "https://example.com/video1"
  },
  {
    id: 2,
    title: "Wednesday Bible Study - Book of Romans",
    preacher: "Pastor Sarah",
    date: "2023-09-13",
    category: "Bible Study",
    description: "An in-depth study of Romans chapter 8",
    thumbnailUrl: "https://placehold.co/300x180",
    videoUrl: "https://example.com/video2"
  },
  {
    id: 3,
    title: "Youth Conference Highlights",
    preacher: "",
    date: "2023-08-20",
    category: "Event",
    description: "Highlights from our summer youth conference",
    thumbnailUrl: "https://placehold.co/300x180",
    videoUrl: "https://example.com/video3"
  }
];

const VideoArchiveManager = () => {
  const [videos, setVideos] = useState(initialVideos);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [newVideo, setNewVideo] = useState({
    title: '',
    preacher: '',
    date: new Date().toISOString().split('T')[0],
    category: 'Sermon',
    description: '',
    thumbnailUrl: '',
    videoUrl: ''
  });
  const { toast } = useToast();

  const handleAddVideo = () => {
    if (!newVideo.title || !newVideo.videoUrl) {
      toast({
        title: "Missing Information",
        description: "Please provide at least a title and video URL.",
        variant: "destructive"
      });
      return;
    }

    const video = {
      id: Date.now(),
      ...newVideo
    };

    setVideos([...videos, video]);
    setNewVideo({
      title: '',
      preacher: '',
      date: new Date().toISOString().split('T')[0],
      category: 'Sermon',
      description: '',
      thumbnailUrl: '',
      videoUrl: ''
    });
    setIsAdding(false);
    toast({
      title: "Video Added",
      description: "Video has been added successfully to the archive."
    });
  };

  const handleDeleteVideo = (id: number) => {
    setVideos(videos.filter(video => video.id !== id));
    toast({
      title: "Video Removed",
      description: "Video has been removed from the archive."
    });
  };

  const handleEditVideo = (id: number) => {
    const video = videos.find(v => v.id === id);
    if (video) {
      setIsEditing(id);
      setNewVideo({
        title: video.title,
        preacher: video.preacher,
        date: video.date,
        category: video.category,
        description: video.description,
        thumbnailUrl: video.thumbnailUrl,
        videoUrl: video.videoUrl
      });
    }
  };

  const handleUpdateVideo = () => {
    if (!isEditing) return;
    
    setVideos(videos.map(video => 
      video.id === isEditing ? { ...video, ...newVideo } : video
    ));
    
    setIsEditing(null);
    setNewVideo({
      title: '',
      preacher: '',
      date: new Date().toISOString().split('T')[0],
      category: 'Sermon',
      description: '',
      thumbnailUrl: '',
      videoUrl: ''
    });
    
    toast({
      title: "Video Updated",
      description: "Video has been updated successfully."
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-serif text-church-red">Video Archives</h2>
        {!isAdding && !isEditing && (
          <Button 
            onClick={() => setIsAdding(true)}
            className="bg-church-red hover:bg-church-red-light"
          >
            <PlusCircle size={16} className="mr-2" />
            Add New Video
          </Button>
        )}
      </div>
      
      {(isAdding || isEditing) && (
        <Card>
          <CardHeader>
            <CardTitle>{isEditing ? "Edit Video" : "Add New Video"}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium mb-1">
                  Title
                </label>
                <Input
                  id="title"
                  value={newVideo.title}
                  onChange={(e) => setNewVideo({ ...newVideo, title: e.target.value })}
                  placeholder="Video Title"
                />
              </div>
              
              <div>
                <label htmlFor="preacher" className="block text-sm font-medium mb-1">
                  Preacher/Speaker
                </label>
                <Input
                  id="preacher"
                  value={newVideo.preacher}
                  onChange={(e) => setNewVideo({ ...newVideo, preacher: e.target.value })}
                  placeholder="Name of preacher or speaker (if applicable)"
                />
              </div>
              
              <div>
                <label htmlFor="date" className="block text-sm font-medium mb-1">
                  Date
                </label>
                <Input
                  id="date"
                  type="date"
                  value={newVideo.date}
                  onChange={(e) => setNewVideo({ ...newVideo, date: e.target.value })}
                />
              </div>
              
              <div>
                <label htmlFor="category" className="block text-sm font-medium mb-1">
                  Category
                </label>
                <Select
                  value={newVideo.category}
                  onValueChange={(value) => setNewVideo({ ...newVideo, category: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Sermon">Sermon</SelectItem>
                    <SelectItem value="Bible Study">Bible Study</SelectItem>
                    <SelectItem value="Workshop">Workshop</SelectItem>
                    <SelectItem value="Event">Event</SelectItem>
                    <SelectItem value="Testimony">Testimony</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-1">
                  Description
                </label>
                <Textarea
                  id="description"
                  value={newVideo.description}
                  onChange={(e) => setNewVideo({ ...newVideo, description: e.target.value })}
                  placeholder="Brief description of the video"
                  rows={3}
                />
              </div>
              
              <div>
                <label htmlFor="thumbnailUrl" className="block text-sm font-medium mb-1">
                  Thumbnail URL
                </label>
                <Input
                  id="thumbnailUrl"
                  value={newVideo.thumbnailUrl}
                  onChange={(e) => setNewVideo({ ...newVideo, thumbnailUrl: e.target.value })}
                  placeholder="https://example.com/thumbnail.jpg"
                />
              </div>
              
              <div>
                <label htmlFor="videoUrl" className="block text-sm font-medium mb-1">
                  Video URL
                </label>
                <Input
                  id="videoUrl"
                  value={newVideo.videoUrl}
                  onChange={(e) => setNewVideo({ ...newVideo, videoUrl: e.target.value })}
                  placeholder="https://example.com/video or YouTube URL"
                />
              </div>
              
              <div className="flex justify-end gap-2 mt-4">
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setIsAdding(false);
                    setIsEditing(null);
                    setNewVideo({
                      title: '',
                      preacher: '',
                      date: new Date().toISOString().split('T')[0],
                      category: 'Sermon',
                      description: '',
                      thumbnailUrl: '',
                      videoUrl: ''
                    });
                  }}
                >
                  Cancel
                </Button>
                <Button 
                  onClick={isEditing ? handleUpdateVideo : handleAddVideo}
                  className="bg-church-red hover:bg-church-red-light"
                >
                  <Save size={16} className="mr-2" />
                  {isEditing ? "Update Video" : "Save Video"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
      
      <div className="grid gap-4 md:grid-cols-2">
        {videos.map((video) => (
          <Card key={video.id}>
            <div className="relative aspect-video">
              {video.thumbnailUrl ? (
                <img 
                  src={video.thumbnailUrl} 
                  alt={video.title} 
                  className="w-full h-full object-cover rounded-t-lg"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-t-lg">
                  <Video className="text-gray-400" size={48} />
                </div>
              )}
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{video.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {video.preacher && (
                <p className="text-sm font-medium mb-1">Speaker: {video.preacher}</p>
              )}
              <p className="text-xs text-gray-500 mb-1">Date: {video.date}</p>
              <p className="text-xs text-gray-500 mb-2">Category: {video.category}</p>
              <p className="text-sm mb-3 line-clamp-2">{video.description}</p>
              <div className="flex justify-between mt-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleEditVideo(video.id)}
                >
                  Edit
                </Button>
                <Button 
                  variant="destructive" 
                  size="sm"
                  onClick={() => handleDeleteVideo(video.id)}
                >
                  <Trash2 size={16} />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default VideoArchiveManager;

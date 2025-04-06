
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { PlusCircle, Trash2, Save } from 'lucide-react';

// Sample data - in a real app, this would come from a database
const initialStudyGuides = [
  {
    id: 1,
    title: "Understanding Genesis",
    description: "A comprehensive guide to understanding the book of Genesis",
    content: "This guide covers the creation story, Adam and Eve, Noah's Ark, and more.",
    author: "Pastor John",
    dateCreated: "2023-05-15"
  },
  {
    id: 2,
    title: "Psalms: Songs of Praise",
    description: "Exploring the book of Psalms",
    content: "Learn about the different types of psalms and their meanings.",
    author: "Pastor Sarah",
    dateCreated: "2023-06-10"
  }
];

const StudyGuidesManager = () => {
  const [studyGuides, setStudyGuides] = useState(initialStudyGuides);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [newGuide, setNewGuide] = useState({
    title: '',
    description: '',
    content: '',
    author: '',
    dateCreated: new Date().toISOString().split('T')[0]
  });
  const { toast } = useToast();

  const handleAddGuide = () => {
    if (!newGuide.title || !newGuide.description) {
      toast({
        title: "Missing Information",
        description: "Please provide at least a title and description.",
        variant: "destructive"
      });
      return;
    }

    const guide = {
      id: Date.now(),
      ...newGuide
    };

    setStudyGuides([...studyGuides, guide]);
    setNewGuide({
      title: '',
      description: '',
      content: '',
      author: '',
      dateCreated: new Date().toISOString().split('T')[0]
    });
    setIsAdding(false);
    toast({
      title: "Guide Added",
      description: "Study guide has been created successfully."
    });
  };

  const handleDeleteGuide = (id: number) => {
    setStudyGuides(studyGuides.filter(guide => guide.id !== id));
    toast({
      title: "Guide Removed",
      description: "Study guide has been deleted."
    });
  };

  const handleEditGuide = (id: number) => {
    const guide = studyGuides.find(g => g.id === id);
    if (guide) {
      setIsEditing(id);
      setNewGuide({
        title: guide.title,
        description: guide.description,
        content: guide.content,
        author: guide.author,
        dateCreated: guide.dateCreated
      });
    }
  };

  const handleUpdateGuide = () => {
    if (!isEditing) return;
    
    setStudyGuides(studyGuides.map(guide => 
      guide.id === isEditing ? { ...guide, ...newGuide } : guide
    ));
    
    setIsEditing(null);
    setNewGuide({
      title: '',
      description: '',
      content: '',
      author: '',
      dateCreated: new Date().toISOString().split('T')[0]
    });
    
    toast({
      title: "Guide Updated",
      description: "Study guide has been updated successfully."
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-serif text-church-red">Study Guides</h2>
        {!isAdding && !isEditing && (
          <Button 
            onClick={() => setIsAdding(true)} 
            className="bg-church-red hover:bg-church-red-light"
          >
            <PlusCircle size={16} className="mr-2" />
            Add New Guide
          </Button>
        )}
      </div>
      
      {(isAdding || isEditing) && (
        <Card>
          <CardHeader>
            <CardTitle>{isEditing ? "Edit Study Guide" : "Add New Study Guide"}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium mb-1">
                  Title
                </label>
                <Input
                  id="title"
                  value={newGuide.title}
                  onChange={(e) => setNewGuide({ ...newGuide, title: e.target.value })}
                  placeholder="Guide Title"
                />
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-1">
                  Description
                </label>
                <Input
                  id="description"
                  value={newGuide.description}
                  onChange={(e) => setNewGuide({ ...newGuide, description: e.target.value })}
                  placeholder="Brief description"
                />
              </div>
              
              <div>
                <label htmlFor="content" className="block text-sm font-medium mb-1">
                  Content
                </label>
                <Textarea
                  id="content"
                  value={newGuide.content}
                  onChange={(e) => setNewGuide({ ...newGuide, content: e.target.value })}
                  placeholder="Full guide content"
                  rows={5}
                />
              </div>
              
              <div>
                <label htmlFor="author" className="block text-sm font-medium mb-1">
                  Author
                </label>
                <Input
                  id="author"
                  value={newGuide.author}
                  onChange={(e) => setNewGuide({ ...newGuide, author: e.target.value })}
                  placeholder="Author name"
                />
              </div>
              
              <div className="flex justify-end gap-2 mt-4">
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setIsAdding(false);
                    setIsEditing(null);
                    setNewGuide({
                      title: '',
                      description: '',
                      content: '',
                      author: '',
                      dateCreated: new Date().toISOString().split('T')[0]
                    });
                  }}
                >
                  Cancel
                </Button>
                <Button 
                  onClick={isEditing ? handleUpdateGuide : handleAddGuide}
                  className="bg-church-red hover:bg-church-red-light"
                >
                  <Save size={16} className="mr-2" />
                  {isEditing ? "Update Guide" : "Save Guide"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
      
      <div className="grid gap-4 md:grid-cols-2">
        {studyGuides.map((guide) => (
          <Card key={guide.id}>
            <CardHeader>
              <CardTitle>{guide.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-2">Author: {guide.author}</p>
              <p className="text-sm text-gray-500 mb-4">Date: {guide.dateCreated}</p>
              <p className="mb-2">{guide.description}</p>
              <div className="flex justify-end mt-4 space-x-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleEditGuide(guide.id)}
                >
                  Edit
                </Button>
                <Button 
                  variant="destructive" 
                  size="sm"
                  onClick={() => handleDeleteGuide(guide.id)}
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

export default StudyGuidesManager;

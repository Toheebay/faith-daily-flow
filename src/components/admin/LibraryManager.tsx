
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { PlusCircle, Trash2, Save, BookOpen } from 'lucide-react';

// Sample data - in a real app, this would come from a database
const initialLibraryItems = [
  {
    id: 1,
    title: "The Purpose Driven Life",
    author: "Rick Warren",
    category: "Christian Living",
    description: "What on earth am I here for?",
    imageUrl: "https://placehold.co/200",
    link: "https://example.com/book1",
    format: "book"
  },
  {
    id: 2,
    title: "Mere Christianity",
    author: "C.S. Lewis",
    category: "Apologetics",
    description: "Classic exploration of faith.",
    imageUrl: "https://placehold.co/200",
    link: "https://example.com/book2",
    format: "ebook"
  },
  {
    id: 3,
    title: "Pilgrim's Progress",
    author: "John Bunyan",
    category: "Fiction",
    description: "Allegorical journey of a Christian.",
    imageUrl: "https://placehold.co/200",
    link: "https://example.com/book3",
    format: "audio"
  }
];

const LibraryManager = () => {
  const [libraryItems, setLibraryItems] = useState(initialLibraryItems);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [newItem, setNewItem] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    imageUrl: '',
    link: '',
    format: 'book'
  });
  const { toast } = useToast();

  const handleAddItem = () => {
    if (!newItem.title || !newItem.author) {
      toast({
        title: "Missing Information",
        description: "Please provide at least a title and author.",
        variant: "destructive"
      });
      return;
    }

    const item = {
      id: Date.now(),
      ...newItem
    };

    setLibraryItems([...libraryItems, item]);
    setNewItem({
      title: '',
      author: '',
      category: '',
      description: '',
      imageUrl: '',
      link: '',
      format: 'book'
    });
    setIsAdding(false);
    toast({
      title: "Item Added",
      description: "Library item has been added successfully."
    });
  };

  const handleDeleteItem = (id: number) => {
    setLibraryItems(libraryItems.filter(item => item.id !== id));
    toast({
      title: "Item Removed",
      description: "Library item has been deleted."
    });
  };

  const handleEditItem = (id: number) => {
    const item = libraryItems.find(i => i.id === id);
    if (item) {
      setIsEditing(id);
      setNewItem({
        title: item.title,
        author: item.author,
        category: item.category,
        description: item.description,
        imageUrl: item.imageUrl,
        link: item.link,
        format: item.format
      });
    }
  };

  const handleUpdateItem = () => {
    if (!isEditing) return;
    
    setLibraryItems(libraryItems.map(item => 
      item.id === isEditing ? { ...item, ...newItem } : item
    ));
    
    setIsEditing(null);
    setNewItem({
      title: '',
      author: '',
      category: '',
      description: '',
      imageUrl: '',
      link: '',
      format: 'book'
    });
    
    toast({
      title: "Item Updated",
      description: "Library item has been updated successfully."
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-serif text-church-red">Online Library</h2>
        {!isAdding && !isEditing && (
          <Button 
            onClick={() => setIsAdding(true)}
            className="bg-church-red hover:bg-church-red-light"
          >
            <PlusCircle size={16} className="mr-2" />
            Add New Item
          </Button>
        )}
      </div>
      
      {(isAdding || isEditing) && (
        <Card>
          <CardHeader>
            <CardTitle>{isEditing ? "Edit Library Item" : "Add New Library Item"}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium mb-1">
                  Title
                </label>
                <Input
                  id="title"
                  value={newItem.title}
                  onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                  placeholder="Item Title"
                />
              </div>
              
              <div>
                <label htmlFor="author" className="block text-sm font-medium mb-1">
                  Author
                </label>
                <Input
                  id="author"
                  value={newItem.author}
                  onChange={(e) => setNewItem({ ...newItem, author: e.target.value })}
                  placeholder="Author name"
                />
              </div>
              
              <div>
                <label htmlFor="category" className="block text-sm font-medium mb-1">
                  Category
                </label>
                <Input
                  id="category"
                  value={newItem.category}
                  onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                  placeholder="E.g., Devotional, Bible Study, Theology"
                />
              </div>
              
              <div>
                <label htmlFor="format" className="block text-sm font-medium mb-1">
                  Format
                </label>
                <Select
                  value={newItem.format}
                  onValueChange={(value) => setNewItem({ ...newItem, format: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="book">Physical Book</SelectItem>
                    <SelectItem value="ebook">E-Book</SelectItem>
                    <SelectItem value="audio">Audio Book</SelectItem>
                    <SelectItem value="pdf">PDF</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-1">
                  Description
                </label>
                <Textarea
                  id="description"
                  value={newItem.description}
                  onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                  placeholder="Brief description"
                  rows={3}
                />
              </div>
              
              <div>
                <label htmlFor="imageUrl" className="block text-sm font-medium mb-1">
                  Image URL
                </label>
                <Input
                  id="imageUrl"
                  value={newItem.imageUrl}
                  onChange={(e) => setNewItem({ ...newItem, imageUrl: e.target.value })}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              
              <div>
                <label htmlFor="link" className="block text-sm font-medium mb-1">
                  Link
                </label>
                <Input
                  id="link"
                  value={newItem.link}
                  onChange={(e) => setNewItem({ ...newItem, link: e.target.value })}
                  placeholder="https://example.com/book"
                />
              </div>
              
              <div className="flex justify-end gap-2 mt-4">
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setIsAdding(false);
                    setIsEditing(null);
                    setNewItem({
                      title: '',
                      author: '',
                      category: '',
                      description: '',
                      imageUrl: '',
                      link: '',
                      format: 'book'
                    });
                  }}
                >
                  Cancel
                </Button>
                <Button 
                  onClick={isEditing ? handleUpdateItem : handleAddItem}
                  className="bg-church-red hover:bg-church-red-light"
                >
                  <Save size={16} className="mr-2" />
                  {isEditing ? "Update Item" : "Save Item"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
      
      <div className="grid gap-4 md:grid-cols-3">
        {libraryItems.map((item) => (
          <Card key={item.id}>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center mb-3">
                {item.imageUrl ? (
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-24 h-32 object-cover rounded"
                  />
                ) : (
                  <div className="w-24 h-32 bg-gray-200 flex items-center justify-center rounded">
                    <BookOpen className="text-gray-400" />
                  </div>
                )}
              </div>
              <p className="text-sm font-medium">By: {item.author}</p>
              <p className="text-xs text-gray-500 mb-1">Category: {item.category}</p>
              <p className="text-xs text-gray-500 mb-2">Format: {item.format}</p>
              <p className="text-sm line-clamp-2 mb-3">{item.description}</p>
              <div className="flex justify-between mt-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleEditItem(item.id)}
                >
                  Edit
                </Button>
                <Button 
                  variant="destructive" 
                  size="sm"
                  onClick={() => handleDeleteItem(item.id)}
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

export default LibraryManager;

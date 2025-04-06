
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Edit, Trash2, Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Sample Bible study data
const initialBibleStudies = [
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
  }
];

interface BibleStudy {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  leader: string;
  location: string;
  category: string;
  featured?: boolean;
}

const BibleStudyManager = () => {
  const [bibleStudies, setBibleStudies] = useState<BibleStudy[]>(initialBibleStudies);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [formData, setFormData] = useState<Omit<BibleStudy, 'id'>>({
    title: '',
    description: '',
    date: '',
    time: '',
    leader: '',
    location: '',
    category: 'New Testament',
    featured: false
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFeaturedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, featured: e.target.checked }));
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      date: '',
      time: '',
      leader: '',
      location: '',
      category: 'New Testament',
      featured: false
    });
    setIsAdding(false);
    setIsEditing(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isEditing !== null) {
      setBibleStudies(prev => 
        prev.map(study => study.id === isEditing ? { ...formData, id: isEditing } : study)
      );
      toast({
        title: "Bible Study Updated",
        description: `${formData.title} has been successfully updated.`,
      });
    } else {
      const newId = Math.max(0, ...bibleStudies.map(s => s.id)) + 1;
      setBibleStudies(prev => [...prev, { id: newId, ...formData }]);
      toast({
        title: "Bible Study Added",
        description: `${formData.title} has been successfully added.`,
      });
    }
    
    resetForm();
  };

  const handleEdit = (study: BibleStudy) => {
    setFormData({
      title: study.title,
      description: study.description,
      date: study.date,
      time: study.time,
      leader: study.leader,
      location: study.location,
      category: study.category,
      featured: study.featured || false
    });
    setIsEditing(study.id);
    setIsAdding(true);
  };

  const handleDelete = (id: number) => {
    setBibleStudies(prev => prev.filter(study => study.id !== id));
    toast({
      title: "Bible Study Removed",
      description: "The Bible study has been successfully removed.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-serif text-church-red">Manage Bible Studies</h2>
        <Button 
          onClick={() => setIsAdding(!isAdding)} 
          className="bg-church-red hover:bg-church-red-light flex items-center gap-2"
        >
          {isAdding ? 'Cancel' : <><Plus size={16} /> Add Bible Study</>}
        </Button>
      </div>

      {isAdding && (
        <Card className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
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
                <Label htmlFor="leader">Leader</Label>
                <Input 
                  id="leader"
                  name="leader"
                  value={formData.leader}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="date">Day</Label>
                <Input 
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  placeholder="e.g., Every Monday"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="time">Time</Label>
                <Input 
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  placeholder="e.g., 7:00 PM - 8:30 PM"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input 
                  id="location"
                  name="location"
                  value={formData.location}
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
                    <SelectItem value="New Testament">New Testament</SelectItem>
                    <SelectItem value="Old Testament">Old Testament</SelectItem>
                    <SelectItem value="Topical">Topical</SelectItem>
                  </SelectContent>
                </Select>
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
              
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.featured}
                  onChange={handleFeaturedChange}
                  className="rounded border-church-red text-church-red focus:ring-church-red"
                />
                <Label htmlFor="featured">Featured Study</Label>
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button 
                type="submit" 
                className="bg-church-red hover:bg-church-red-light"
              >
                {isEditing !== null ? 'Update Study' : 'Add Study'}
              </Button>
            </div>
          </form>
        </Card>
      )}

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Day</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Leader</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bibleStudies.map((study) => (
              <TableRow key={study.id}>
                <TableCell className="font-medium">{study.title}</TableCell>
                <TableCell>{study.date}</TableCell>
                <TableCell>{study.time}</TableCell>
                <TableCell>{study.leader}</TableCell>
                <TableCell>{study.category}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleEdit(study)}
                    >
                      <Edit size={16} />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleDelete(study.id)}
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BibleStudyManager;

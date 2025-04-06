
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// This is a simulated Facebook feed component
// In a real implementation, you would integrate with Facebook's API
// to pull in actual posts from the church's Facebook page

const FacebookFeed: React.FC = () => {
  // Simulated Facebook posts
  const facebookPosts = [
    {
      id: 1,
      date: "2 hours ago",
      content: "Join us tonight for our Wednesday Bible Study at 7:00 PM. Pastor Johnson will be continuing our series on the Book of Romans.",
      likes: 24,
      comments: 5,
      shares: 3
    },
    {
      id: 2,
      date: "Yesterday",
      content: "Today's daily reading: \"Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.\" - Proverbs 3:5-6",
      likes: 45,
      comments: 12,
      shares: 8
    },
    {
      id: 3,
      date: "3 days ago",
      content: "Thank you to everyone who helped with our community outreach event this Saturday! We were able to serve over 200 families with food, clothing, and prayer.",
      likes: 87,
      comments: 32,
      shares: 14,
      image: "https://images.unsplash.com/photo-1470079415052-520e00f32fdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80"
    }
  ];
  
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-serif text-church-red">Latest Updates</h2>
      
      <div className="space-y-4">
        {facebookPosts.map(post => (
          <Card key={post.id} className="bg-white p-5 shadow-md">
            <div className="flex items-center mb-3">
              <div className="h-10 w-10 bg-church-red rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-serif font-bold">FC</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Faith Church</h3>
                <p className="text-sm text-gray-500">{post.date}</p>
              </div>
            </div>
            
            <p className="mb-4">{post.content}</p>
            
            {post.image && (
              <div className="mb-4">
                <img 
                  src={post.image} 
                  alt="Post" 
                  className="w-full h-auto rounded-md"
                />
              </div>
            )}
            
            <div className="flex justify-between text-sm text-gray-600 pt-2 border-t border-gray-100">
              <div className="flex gap-4">
                <span>{post.likes} Likes</span>
                <span>{post.comments} Comments</span>
                <span>{post.shares} Shares</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-6">
        <Button asChild className="bg-church-red hover:bg-church-red-light">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            View More on Facebook
          </a>
        </Button>
      </div>
    </div>
  );
};

export default FacebookFeed;


import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageSquare, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    toast({
      title: "Message Sent",
      description: "Thank you for contacting Faith Church. We'll respond to your message soon.",
      duration: 5000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-church-red text-white py-12">
          <div className="section-container">
            <h1 className="text-3xl md:text-4xl font-serif text-white mb-4">Contact Us</h1>
            <p className="text-lg text-church-cream max-w-2xl">
              We'd love to hear from you! Reach out with questions, prayer requests, 
              or to learn more about our church community.
            </p>
          </div>
        </section>
        
        {/* Contact Information & Form Section */}
        <section className="section-container py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-serif text-church-red mb-6">Get in Touch</h2>
              
              <Card className="p-6 flex items-start gap-4">
                <MapPin className="text-church-red min-w-[24px]" />
                <div>
                  <h3 className="font-semibold mb-1">Church Address</h3>
                  <p>123 Faith Avenue<br />Springfield, IL 62704</p>
                </div>
              </Card>
              
              <Card className="p-6 flex items-start gap-4">
                <Phone className="text-church-red min-w-[24px]" />
                <div>
                  <h3 className="font-semibold mb-1">Phone Numbers</h3>
                  <p>Main Office: (555) 123-4567<br />Pastor's Office: (555) 123-4568</p>
                </div>
              </Card>
              
              <Card className="p-6 flex items-start gap-4">
                <Mail className="text-church-red min-w-[24px]" />
                <div>
                  <h3 className="font-semibold mb-1">Email Addresses</h3>
                  <p>General Inquiries: info@faithchurch.org<br />Pastor: pastor@faithchurch.org</p>
                </div>
              </Card>
              
              <Card className="p-6 flex items-start gap-4">
                <Clock className="text-church-red min-w-[24px]" />
                <div>
                  <h3 className="font-semibold mb-1">Office Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 4:00 PM<br />Saturday: Closed<br />Sunday: 8:00 AM - 1:00 PM</p>
                </div>
              </Card>
            </div>
            
            {/* Contact Form */}
            <div>
              <Card className="p-6">
                <h2 className="text-2xl font-serif text-church-red mb-6 flex items-center gap-2">
                  <MessageSquare className="text-church-red" size={20} />
                  Send a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="block text-sm font-medium">First Name</label>
                      <Input id="firstName" required />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="block text-sm font-medium">Last Name</label>
                      <Input id="lastName" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">Email</label>
                    <Input id="email" type="email" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium">Phone Number</label>
                    <Input id="phone" type="tel" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
                    <Input id="subject" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium">Message</label>
                    <Textarea id="message" rows={5} required />
                  </div>
                  
                  <div className="pt-2">
                    <Button type="submit" className="w-full bg-church-red hover:bg-church-red-light">
                      Send Message
                    </Button>
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-8">
          <div className="h-[400px] w-full bg-gray-200 flex items-center justify-center">
            <div className="text-center p-6">
              <h3 className="text-xl font-serif text-church-red mb-2">Church Location</h3>
              <p className="text-gray-600 mb-4">123 Faith Avenue, Springfield, IL 62704</p>
              <Button className="bg-church-red hover:bg-church-red-light">
                Get Directions
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Twitter, Facebook, Linkedin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Most calendars are designed for teams.<br />
            Slate is designed for freelancers
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white p-12 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Contact Us</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full h-12 px-4 bg-gray-50 border-0 rounded-lg"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full h-12 px-4 bg-gray-50 border-0 rounded-lg"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={8}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 bg-gray-50 border-0 rounded-lg resize-none"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold"
              >
                Send
              </Button>
            </form>
          </div>
          
          {/* Contact Info and Map */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  6386 Spring St undefined Anchorage,<br />
                  Georgia 12473 United States
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-600 font-semibold">
                  (843) 555-0130
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-600">
                  willie.jennings@example.com
                </p>
              </div>
            </div>
            
            {/* Map */}
            <div className="h-80 bg-gray-300 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/ff519400-4cb3-43ae-a6f2-9ecffb7c2f18.png"
                alt="Map location"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Social Icons */}
            <div className="flex justify-center space-x-4">
              <a href="#" className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="w-6 h-6 text-white" />
              </a>
              <a href="#" className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-6 h-6 text-white" />
              </a>
              <a href="#" className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Successfully subscribed to newsletter!");
    setEmail("");
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left side - Illustration */}
          <div className="relative">
            <img 
              src="/lovable-uploads/a8e61797-ce3c-4d8f-b843-1160653fa2ca.png" 
              alt="Lightning fast prototyping illustration"
              className="w-full h-auto"
            />
          </div>
          
          {/* Right side - Content */}
          <div className="text-center lg:text-left">
            <p className="text-gray-600 text-lg mb-4">At your fingertips</p>
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              Lightning fast<br />prototyping
            </h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Subscribe to our Newsletter
              </h3>
              <p className="text-gray-600">
                Available exclusively on Figmaland
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto lg:mx-0">
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button 
                type="submit" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-8"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;


import { Button } from "@/components/ui/button";
import { Twitter, Facebook, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/lovable-uploads/69f80037-3145-4296-80f7-48d045cf898e.png')"
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Navigation Header */}
      <header className="relative z-20 flex items-center justify-between px-6 py-6 container mx-auto">
        <nav className="flex items-center space-x-8">
          <a href="#" className="text-white hover:text-gray-300 transition-colors">Home</a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">Product</a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">Pricing</a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">About</a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">Contact</a>
        </nav>
        
        {/* Logo */}
        <div className="text-white text-xl font-bold">
          FIGMA L<span className="text-blue-400">A</span>ND
        </div>
        
        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          <Twitter className="w-6 h-6 text-white hover:text-blue-400 cursor-pointer transition-colors" />
          <Facebook className="w-6 h-6 text-white hover:text-blue-400 cursor-pointer transition-colors" />
          <Linkedin className="w-6 h-6 text-white hover:text-blue-400 cursor-pointer transition-colors" />
        </div>
      </header>
      
      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)] container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            The best products<br />
            start with Figma
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto">
            Most calendars are designed for teams. Slate is designed<br />
            for freelancers who want a simple way to plan their schedule.
          </p>
          <Button 
            size="lg" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-12 py-6 text-lg rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Try For Free
          </Button>
        </div>
      </div>
      
      {/* Curved bottom section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-white" 
           style={{
             clipPath: "ellipse(100% 100% at 50% 100%)"
           }}>
      </div>
    </section>
  );
};

export default Hero;

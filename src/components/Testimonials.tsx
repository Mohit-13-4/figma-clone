
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      quote: "Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.",
      author: "John Doe",
      role: "UI designer",
      avatar: "/lovable-uploads/d0f79f3d-6dd2-40fe-a66d-068c29af2616.png"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="mb-12">
            <img 
              src="/lovable-uploads/d0f79f3d-6dd2-40fe-a66d-068c29af2616.png" 
              alt="IBM" 
              className="h-16 mx-auto opacity-70"
            />
          </div>
          
          <div className="max-w-4xl mx-auto mb-12">
            <blockquote className="text-2xl text-gray-700 mb-8 leading-relaxed font-light">
              "{testimonials[currentSlide].quote}"
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-gray-300 rounded-full mr-6 overflow-hidden">
                <img 
                  src={testimonials[currentSlide].avatar} 
                  alt={testimonials[currentSlide].author}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900 text-lg">{testimonials[currentSlide].author}</p>
                <p className="text-gray-600">{testimonials[currentSlide].role}</p>
              </div>
            </div>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center space-x-3">
            <div className="w-4 h-4 rounded-full bg-blue-500"></div>
            <div className="w-4 h-4 rounded-full bg-gray-300"></div>
            <div className="w-4 h-4 rounded-full bg-blue-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

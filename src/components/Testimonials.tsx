
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      quote: "Most calendars are designed for teams. State is designed for freelancers who want a simple way to plan their schedule.",
      author: "John Smith",
      company: "IBM",
      logo: "/lovable-uploads/cb1bea9f-7744-4334-beea-35065d82b8db.png"
    }
  ];

  const companyLogos = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    { name: "Uber", logo: "https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" },
    { name: "Dropbox", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Dropbox_logo_2017.svg" }
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
        {/* Company Logos */}
        <div className="text-center mb-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
            {companyLogos.map((company, index) => (
              <div key={index} className="flex justify-center">
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="h-8 object-contain filter grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Testimonials</h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <div className="mb-6">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" 
                alt="IBM" 
                className="h-12 mx-auto mb-6 opacity-60"
              />
            </div>
            <blockquote className="text-xl text-gray-700 mb-6 leading-relaxed">
              "{testimonials[currentSlide].quote}"
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <p className="font-semibold text-gray-900">{testimonials[currentSlide].author}</p>
                <p className="text-gray-600">{testimonials[currentSlide].company}</p>
              </div>
            </div>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

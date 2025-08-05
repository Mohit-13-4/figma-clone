
import { Button } from "@/components/ui/button";

const Partners = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          Partners
        </h2>
        <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
          Most calendars are designed for teams.<br />
          Slate is designed for freelancers
        </p>
        
        {/* Partners Grid */}
        <div className="grid grid-cols-4 gap-8 mb-16 max-w-5xl mx-auto">
          <div className="bg-white p-12 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center justify-center min-h-[150px]">
            <img 
              src="/lovable-uploads/b193d1e9-b6d2-4952-924d-bdcb4d02465f.png"
              alt="Google"
              className="h-12 w-auto object-contain mb-4"
            />
          </div>
          
          <div className="bg-white p-12 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center justify-center min-h-[150px]">
            <img 
              src="/lovable-uploads/2466dbe1-cbc4-4d36-9343-33e3beea8507.png"
              alt="Amazon"
              className="h-12 w-auto object-contain mb-4"
            />
          </div>
          
          <div className="bg-white p-12 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center justify-center min-h-[150px]">
            <img 
              src="/lovable-uploads/638d433a-78b6-4b20-aff6-244d92ab821e.png"
              alt="Microsoft"
              className="h-12 w-auto object-contain mb-4"
            />
          </div>
          
          <div className="bg-white p-12 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center justify-center min-h-[150px]">
            <img 
              src="/lovable-uploads/c70297b3-3da4-45d4-82c4-33cdbcd855a4.png"
              alt="Dropbox"
              className="h-12 w-auto object-contain mb-4"
            />
          </div>
          
          <div className="bg-white p-12 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center justify-center min-h-[150px]">
            <img 
              src="/lovable-uploads/683c9ed1-c17f-43b3-a7b0-bf9af8c80cf7.png"
              alt="Uber"
              className="h-12 w-auto object-contain mb-4"
            />
          </div>
          
          <div className="bg-white p-12 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center justify-center min-h-[150px]">
            <img 
              src="/lovable-uploads/b193d1e9-b6d2-4952-924d-bdcb4d02465f.png"
              alt="Google"
              className="h-12 w-auto object-contain mb-4"
            />
          </div>
          
          <div className="bg-white p-12 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center justify-center min-h-[150px]">
            <img 
              src="/lovable-uploads/c70297b3-3da4-45d4-82c4-33cdbcd855a4.png"
              alt="Dropbox"
              className="h-12 w-auto object-contain mb-4"
            />
          </div>
          
          <div className="bg-white p-12 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center justify-center min-h-[150px]">
            <img 
              src="/lovable-uploads/2466dbe1-cbc4-4d36-9343-33e3beea8507.png"
              alt="Amazon"
              className="h-12 w-auto object-contain mb-4"
            />
          </div>
        </div>
        
        <Button 
          size="lg" 
          className="bg-blue-500 hover:bg-blue-600 text-white px-12 py-6 text-lg rounded-full font-semibold"
        >
          Try For Free
        </Button>
      </div>
    </section>
  );
};

export default Partners;

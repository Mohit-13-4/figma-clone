
import { Button } from "@/components/ui/button";

const Partners = () => {
  const partners = [
    { name: "Google", logo: "🌐" },
    { name: "Amazon", logo: "📦" },
    { name: "Microsoft", logo: "🪟" },
    { name: "Uber", logo: "🚗" },
    { name: "Dropbox", logo: "📁" },
    { name: "Google", logo: "🌐" },
    { name: "Uber", logo: "🚗" },
    { name: "Amazon", logo: "📦" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Partners
        </h2>
        <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
          Most calendars are designed for teams.<br />
          Slate is designed for freelancers
        </p>
        
        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center justify-center min-h-[120px]">
              <div className="text-4xl mb-4">{partner.logo}</div>
              <p className="text-gray-500 text-sm">Client Name</p>
              <h3 className="font-semibold text-gray-800">{partner.name}</h3>
            </div>
          ))}
        </div>
        
        <Button 
          size="lg" 
          className="bg-blue-500 hover:bg-blue-600 text-white px-12 py-6 text-lg rounded-full font-semibold transition-all duration-300"
        >
          Try For Free
        </Button>
      </div>
    </section>
  );
};

export default Partners;

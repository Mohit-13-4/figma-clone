
import { useState } from "react";
import { Play } from "lucide-react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative mb-16">
            <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-video">
              <img 
                src="/lovable-uploads/4500db75-8ed1-4cd2-be8a-2aba7d516ece.png" 
                alt="Video thumbnail"
                className="w-full h-full object-cover"
              />
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors shadow-lg"
                  >
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </button>
                </div>
              )}
              {isPlaying && (
                <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                  <p className="text-white text-xl">Video would play here</p>
                </div>
              )}
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Fastest way to<br />organize
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Most calendars are designed for teams.<br />
              Slate is designed for freelancers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

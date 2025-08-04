
import { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface GoogleMapProps {
  className?: string;
}

const GoogleMap = ({ className }: GoogleMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [apiKey, setApiKey] = useState('');
  const [showInput, setShowInput] = useState(true);

  const loadMap = async (key: string) => {
    if (!mapRef.current) return;

    try {
      const loader = new Loader({
        apiKey: key,
        version: 'weekly',
        libraries: ['places']
      });

      const { Map } = await loader.importLibrary('maps');
      const { Marker } = await loader.importLibrary('marker');

      const map = new Map(mapRef.current, {
        center: { lat: 33.7490, lng: -84.3880 }, // Atlanta, Georgia coordinates
        zoom: 13,
        mapTypeControl: false,
        streetViewControl: false,
      });

      // Add marker for the address
      new Marker({
        position: { lat: 33.7490, lng: -84.3880 },
        map: map,
        title: '6386 Spring St, Anchorage, Georgia 12473 United States',
      });

      setShowInput(false);
    } catch (error) {
      console.error('Error loading Google Maps:', error);
      alert('Error loading Google Maps. Please check your API key.');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim()) {
      loadMap(apiKey.trim());
    }
  };

  if (showInput) {
    return (
      <div className={`${className} flex flex-col items-center justify-center bg-gray-100 p-8`}>
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold mb-2">Google Maps Integration</h3>
          <p className="text-sm text-gray-600 mb-4">
            Enter your Google Maps API key to load the interactive map
          </p>
          <p className="text-xs text-gray-500">
            Get your API key from{' '}
            <a
              href="https://console.cloud.google.com/google/maps-apis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Google Cloud Console
            </a>
          </p>
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <input
            type="text"
            placeholder="Enter Google Maps API Key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg mb-4"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Load Map
          </button>
        </form>
      </div>
    );
  }

  return <div ref={mapRef} className={className} />;
};

export default GoogleMap;

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const Map = () => {
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => setZoom((z) => Math.min(z + 0.2, 3));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 0.2, 1));

  return (
    <div className="py-20 scroll-mt-24 container mx-auto px-6">
      
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Global Footprint
      </h2>

      <p className="text-gray-600 text-lg max-w-3xl mb-10">
       Today, Attractive Auto Parts exports to multiple countries and continues to expand its footprint with a focus on quality engineering, timely delivery, and customer satisfaction.
We are building a global network of partners who trust our products for their strength, longevity, and consistent performance on every terrain.
      </p>

      {/* Legend */}
      <div className="flex gap-6 mb-6 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          Manufacturing Facilities
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
          R&D Centres
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-gray-800 rounded-full"></span>
          Presence
        </div>
      </div>

      {/* MAP SECTION */}
      <div className="relative w-full overflow-hidden">
        
        {/* Map Container with Zoom */}
        <div
          className="relative origin-center transition-transform duration-300"
          style={{
            transform: `scale(${zoom})`,
          }}
        >
          {/* World Map Image */}
          <img
            src="/mp.png"
            alt="World Map"
            className="w-full pointer-events-none"
          />

          {/* --- MARKERS --- */}

          {/* Example: India */}
          <div
            className="absolute w-3 h-3 bg-red-600 rounded-full border-2 border-white"
            style={{ top: "48%", left: "72%" }}
            title="Manufacturing Facility"
          />

          {/* Example: Bangladesh */}
          <div
            className="absolute w-3 h-3 bg-gray-900 rounded-full border-2 border-white"
            style={{ top: "50%", left: "74%" }}
            title="Presence"
          />

          {/* Example: Germany (R&D) */}
          <div
            className="absolute w-3 h-3 bg-blue-500 rounded-full border-2 border-white"
            style={{ top: "25%", left: "57%" }}
            title="R&D Centre"
          />

          {/* Add more markers like this */}
        </div>

        {/* Zoom Buttons */}
        <div className="absolute bottom-4 right-4 flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
          <button
            className="p-3 hover:bg-gray-100 border-b"
            onClick={handleZoomIn}
          >
            <Plus className="w-5 h-5" />
          </button>
          <button
            className="p-3 hover:bg-gray-100"
            onClick={handleZoomOut}
          >
            <Minus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Map;

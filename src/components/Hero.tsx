import React from 'react';

export default function TVSHeroSection() {
  return (
    <div
    id='home'
     className="relative scroll-mt-24 w-full min-h-[300px] sm:min-h-[350px] md:h-80 lg:h-96 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 overflow-hidden">
      
      {/* Background Image with optimized overlay */}
      <div className="absolute inset-0 flex items-center justify-end">
        <div className="w-full md:w-3/5 h-full relative">
          <img
            src="/home.jpg"
            alt="TVS Manufacturing Facility"
            className="w-full h-full object-cover object-center opacity-90"
            loading="lazy"
          />
          
          {/* Responsive gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-100/80 via-blue-100/30 to-transparent md:bg-gradient-to-r md:from-blue-100/90 md:via-blue-100/40 md:to-transparent"></div>
        </div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 h-full flex items-center py-6 sm:py-8 md:py-0">
        <div className="container mx-auto px-4 xs:px-5 sm:px-6 md:px-12 lg:px-16 xl:px-20 flex flex-col md:flex-row items-center justify-between md:items-center">
          
          {/* Logo section - positioned differently on mobile vs desktop */}
          <div className="md:absolute md:left-4 lg:left-8 xl:left-12 md:top-1/2 md:-translate-y-1/2 w-full md:w-auto mb-4 sm:mb-6 md:mb-0">
            <img
              src="/png-logo.png"
              alt="TVS Logo"
              className="w-32 h-24 xs:w-36 xs:h-28 sm:w-40 sm:h-32 md:w-44 md:h-36 lg:w-50 lg:h-40 xl:w-56 xl:h-44 mx-auto md:mx-0 object-contain opacity-90 drop-shadow-lg"
            />
          </div>

          {/* Text content with responsive adjustments */}
          <div className="max-w-2xl sm:max-w-3xl md:max-w-2xl lg:max-w-3xl md:ml-40 lg:ml-48 xl:ml-56 text-center md:text-left px-2 sm:px-0">
            <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-900 leading-tight sm:leading-snug md:leading-tight">
              A Legacy of Quality.<br className="hidden xs:block" /> 
              <span className="block mt-1 sm:mt-1.5 md:mt-2">A Future of Innovation</span>
              <span className="block mt-1 sm:mt-1.5 md:mt-2 text-blue-700">- Attractive Group</span>
            </h1>
            
            {/* Optional subtitle for better engagement */}
            <p className="mt-3 sm:mt-4 md:mt-5 text-sm xs:text-base sm:text-lg md:text-xl text-gray-800 font-medium">
              Driving excellence in manufacturing since 1978
            </p>
          </div>

        </div>
      </div>

      {/* Decorative elements - hidden on very small screens */}
      <div className="hidden xs:block absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 md:w-64 md:h-64 bg-blue-200 rounded-full filter blur-2xl sm:blur-3xl opacity-20 sm:opacity-30 -translate-y-1/3 translate-x-1/3 sm:-translate-y-1/2 sm:translate-x-1/2"></div>
      <div className="hidden xs:block absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 md:w-48 md:h-48 bg-blue-300 rounded-full filter blur-xl sm:blur-2xl opacity-15 sm:opacity-20 translate-y-1/3 -translate-x-1/3 sm:translate-y-1/2 sm:-translate-x-1/2"></div>

      {/* Optional bottom gradient for mobile */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-50/50 to-transparent md:hidden"></div>

    </div>
  );
}
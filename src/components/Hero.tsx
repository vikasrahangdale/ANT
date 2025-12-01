import React from 'react';

export default function TVSHeroSection() {
  return (
    <div className="relative w-full h-64 md:h-80  lg:h-96 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0  flex items-center justify-end">
        <div className="w-full  md:w-3/5 h-full relative">
         <img
  src="/home.jpg"
  alt="TVS Manufacturing Facility"
  className="w-full h-full object-cover opacity-90"
/>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-transparent to-transparent"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl mb-20 md:text-6xl lg:text-4xl font-bold text-gray-900 leading-tight">
           A Legacy of Quality. A Future of Innovation- Attractive Group
            </h1>


 <div className=''>
      <img
  src="/png-logo.png"
  alt="TVS Manufacturing Facility"
  className="w-30 h-20  object-cover opacity-90"
/>
 </div>
            {/*  */}


          </div>

        </div>
        
      </div>

               

 


      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-300 rounded-full filter blur-2xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
    </div>
  );
}
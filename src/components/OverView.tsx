import React from 'react';
import { Factory, Bike, Truck } from 'lucide-react';

export default function CompanyOverview() {
  return (
    <div
      id="overview"
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8 sm:py-12 md:py-16"
    >
      {/* Breadcrumb - Hidden on mobile if not needed */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-4">
        {/* Add breadcrumb here if needed */}
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          
          {/* Statistics Section */}
          <div className="space-y-8 sm:space-y-12">
            {/* Revenue */}
            <div className="text-center p-4 sm:p-6 ">
              <div className="flex justify-center mb-4 sm:mb-6">
                <Factory className="w-12 h-12 sm:w-16 sm:h-16 text-blue-900" />
              </div>
              <div className="text-3xl sm:text-4xl lg:text-3xl font-bold text-black">
                USD 4,740 <span className="text-xl sm:text-2xl lg:text-3xl">Million</span>
              </div>
              <div className="text-lg sm:text-xl lg:text-2xl text-black mt-1 sm:mt-2">
                (₹ 391.4 <span className="text-base sm:text-lg lg:text-xl">Billion</span>)
              </div>
              <div className="text-gray-700 font-semibold mt-3 sm:mt-4 text-sm sm:text-base">
                Consolidated Revenue FY 2023-24
              </div>
            </div>

            {/* Two-Wheeler Production */}
            <div className="text-center p-4 sm:p-6 ">
              <div className="flex justify-center mb-4 sm:mb-6">
                <Bike className="w-12 h-12 sm:w-16 sm:h-16 text-blue-900" />
              </div>
              <div className="text-3xl sm:text-4xl lg:text-3xl font-bold text-black">
                4.95 <span className="text-xl sm:text-2xl lg:text-3xl">Million</span>
              </div>
              <div className="text-gray-700 font-semibold mt-3 sm:mt-4 text-sm sm:text-base">
                Two-Wheelers Annual
              </div>
              <div className="text-gray-700 font-semibold text-sm sm:text-base">
                Production Capacity
              </div>
            </div>

            {/* Three-Wheeler Production */}
            <div className="text-center p-4 sm:p-6  rounded-xl ">
              <div className="flex justify-center mb-4 sm:mb-6">
                <Truck className="w-12 h-12 sm:w-16 sm:h-16 text-blue-900" />
              </div>
              <div className="text-2xl sm:text-2xl lg:text-3xl font-bold text-black">
                240,000
              </div>
              <div className="text-gray-700 font-semibold mt-3 sm:mt-4 text-sm sm:text-base">
                Three-Wheelers Annual
              </div>
              <div className="text-gray-700 font-semibold text-sm sm:text-base">
                Production Capacity
              </div>
            </div>
          </div>

          {/* Company Description */}
          <div className="space-y-4 sm:space-y-6 text-gray-800 leading-relaxed">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Company Overview
            </h2>
            
            <div className="space-y-4 sm:space-y-5">
              <p className="text-sm sm:text-base md:text-lg">
                Sustainable Mobility with four state-of-the-art manufacturing facilities in Hosur, Mysuru and Nalagarh in India and Karawang in Indonesia. Rooted in our 100-year legacy of Trust, Value, and Service, we take pride in making internationally aspirational products of the highest quality through innovative and sustainable processes.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg">
                We are the only two-wheeler company to have received the prestigious Deming Prize. Our products lead in their respective categories in the J.D. Power IQS and APEAL surveys. We have been ranked No. 1 Company in the J.D. Power Customer Service Satisfaction Survey for consecutive four years.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg">
                Our group company Norton Motorcycles, based in the United Kingdom, is one of the most emotive motorcycle brands in the world. Our subsidiaries in the personal e-mobility space, Swiss E-Mobility Group (SEMG) and EGO Movement have a leading position in the e-bike market in Switzerland.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg">
                TVS Motor Company endeavours to deliver the most superior customer experience across 80 countries in which we operate.
              </p>
            </div>

            {/* Key Highlights for mobile */}
            <div className="sm:hidden mt-6 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Key Highlights:</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-900 mr-2">•</span>
                  <span>4 state-of-the-art manufacturing facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 mr-2">•</span>
                  <span>Recipient of prestigious Deming Prize</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 mr-2">•</span>
                  <span>Operations in 80+ countries</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
}
import React from 'react';
import { Factory, Bike, Truck } from 'lucide-react';

export default function CompanyOverview() {
  return (
    <div
     id="overview"
     className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      {/* <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-3xl font-bold text-blue-900">COMPANY</div>
            <div className="text-red-600 text-2xl">★</div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-900">Products</a>
            <a href="#" className="text-gray-700 hover:text-blue-900">Services</a>
            <a href="#" className="text-gray-700 hover:text-blue-900">Shop</a>
            <a href="#" className="text-blue-900 font-semibold">Company</a>
          </nav>
          <div className="flex space-x-4">
            <button className="text-blue-900 hover:text-blue-700">Buy Vehicle</button>
            <button className="text-blue-900 hover:text-blue-700">Test Ride</button>
            <button className="text-blue-900 hover:text-blue-700">Dealers</button>
          </div>
        </div>
      </header> */}

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* <div className="text-sm text-gray-600">
          Home &gt; <span className="text-red-600">About Us</span> &gt; <span className="text-gray-900">Overview</span>
        </div> */}
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Statistics Section */}
          <div className="space-y-12">
            {/* Revenue */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Factory className="w-16 h-16 text-blue-900" />
              </div>
              <div className="text-5xl font-bold text-black">USD 4,740 <span className="text-3xl">Million</span></div>
              <div className="text-2xl text-black mt-2">(₹ 391.4 <span className="text-xl">Billion</span>)</div>
              <div className="text-gray-700 font-semibold mt-4">Consolidated Revenue FY 2023-24</div>
            </div>

            {/* Two-Wheeler Production */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Bike className="w-16 h-16 text-blue-900" />
              </div>
              <div className="text-5xl font-bold text-black">4.95 <span className="text-3xl">Million</span></div>
              <div className="text-gray-700 font-semibold mt-4">Two-Wheelers Annual</div>
              <div className="text-gray-700 font-semibold">Production Capacity</div>
            </div>

            {/* Three-Wheeler Production */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Truck className="w-16 h-16 text-blue-900" />
              </div>
              <div className="text-5xl font-bold text-black">240,000</div>
              <div className="text-gray-700 font-semibold mt-4">Three-Wheelers Annual</div>
              <div className="text-gray-700 font-semibold">Production Capacity</div>
            </div>
          </div>

          {/* Company Description */}
          <div className="space-y-6 text-gray-800 font-semibold leading-relaxed">
            <p>
              Sustainable Mobility with four state-of-the-art manufacturing facilities in Hosur, Mysuru and Nalagarh in India and Karawang in Indonesia. Rooted in our 100-year legacy of Trust, Value, and Service, we take pride in making internationally aspirational products of the highest quality through innovative and sustainable processes.
            </p>
            <p>
              We are the only two-wheeler company to have received the prestigious Deming Prize. Our products lead in their respective categories in the J.D. Power IQS and APEAL surveys. We have been ranked No. 1 Company in the J.D. Power Customer Service Satisfaction Survey for consecutive four years.
            </p>
            <p>
              Our group company Norton Motorcycles, based in the United Kingdom, is one of the most emotive motorcycle brands in the world. Our subsidiaries in the personal e-mobility space, Swiss E-Mobility Group (SEMG) and EGO Movement have a leading position in the e-bike market in Switzerland.
            </p>
            <p>
              TVS Motor Company endeavours to deliver the most superior customer experience across 80 countries in which we operate.
            </p>
          </div>
        </div>
      </div>

     
    </div>
  );
}
const VisionState = () => {
  return (
    <div 
    
    className="min-h-screen relative overflow-hidden py-12 px-6 md:px-12 lg:px-24">
      {/* Background Image with Blur Effect */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="/bg.jpg"
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-2"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 mb-16">
          {/* Large #1 Symbol */}
          <div className="flex-shrink-0">
            <div className="text-[12rem] text-red-700 md:text-[16rem] lg:text-[20rem] font-black leading-none" style={{ fontFamily: 'Arial, sans-serif' }}>
              
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
              A Complete Hub for <br />  2W & 3W Tyres & Spare parts
            </h1>
            <p className="text-base md:text-lg text-gray-800 max-w-3xl leading-relaxed">
              We are empowering millions around the globe through our portfolio of innovative and sustainable 
              products. Powered by technology-driven excellence, we are shaping the future of mobility.
            </p>
          </div>
        </div>

        {/* Stats Section with Black Angled Card */}
        <div className="relative ">
          {/* Background for stats card */}
          <div className="absolute  top-1/2 
                         bg-black text-white py-10 px-8 md:px-16 shadow-2xl w-[100%] md:w-[100%]"
               style={{
                 clipPath: "polygon(4% 0, 96% 0, 100% 50%, 96% 100%, 4% 100%, 0 50%)",
               }}>
            <div className="grid grid-cols-1 md:grid-cols-4 text-center gap-10">
              {/* Stat 1 */}
              <div>
                <div className="text-4xl md:text-5xl font-bold tracking-tight">
                  52<span className="text-red-500">+</span>
                </div>
                <p className="text-sm mt-2 opacity-50 font-medium">
                  Country Presence
                </p>
              </div>

              {/* Stat 2 */}
              <div>
                <div className="text-4xl md:text-5xl font-bold tracking-tight">
                  125M<span className="text-red-500">+</span>
                </div>
                <p className="text-sm mt-2 opacity-80 font-medium">
                  Happy Customers
                </p>
              </div>

              {/* Stat 3 */}
              <div>
                <div className="text-4xl md:text-5xl font-bold tracking-tight">
                  11000<span className="text-red-500">+</span>
                </div>
                <p className="text-sm mt-2 opacity-80 font-medium">
                  Customer Touch-Points Worldwide
                </p>
              </div>

              {/* Stat 4 */}
              <div>
                <div className="text-4xl md:text-5xl font-bold tracking-tight">
                  41<span className="text-red-500">+</span>
                </div>
                <p className="text-sm mt-2 opacity-80 font-medium">
                  Years of Manufacturing & R&D Excellence
                </p>
              </div>
            </div>
          </div>

          {/* Additional Background Image behind stats (optional) */}
          <div className="h-[450px] w-full relative overflow-hidden rounded-2xl">
            <img
              src="/bg.jpg"
              alt="background"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
        </div>

      
      </div>
    </div>
  );
};

export default VisionState;
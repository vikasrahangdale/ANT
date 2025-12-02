const VisionState = () => {
  return (
    <div 
      className="min-h-screen scroll-mt-24 relative overflow-hidden py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-12 lg:px-24"
    >
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
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-8 md:gap-16 mb-12 sm:mb-14 md:mb-16">
          {/* Large #1 Symbol - Hidden on mobile */}
          <div className="flex-shrink-0 hidden md:block">
            <div className="text-[12rem] text-red-700 md:text-[16rem] lg:text-[20rem] font-black leading-none" style={{ fontFamily: 'Arial, sans-serif' }}>
              
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-5 md:mb-6">
              A Complete Hub for <br className="hidden sm:block" />  2W & 3W Tyres & Spare parts
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-800 max-w-3xl leading-relaxed">
              Attractive Auto Parts is a trusted name in the 2-wheeler and 3-wheeler industry, delivering high-quality tyres, tubes, and spare parts to customers across India and around the world.
              With a strong manufacturing base and a rapidly growing international presence, we proudly supply durable, performance-driven products that meet global standards.
            </p>
          </div>
        </div>

        {/* Stats Section with Black Angled Card */}
        <div className="relative">
          {/* Background for stats card */}
          <div className="absolute top-1/2 -translate-y-1/2 
                         bg-black text-white py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-16 shadow-2xl w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] md:w-full mx-auto left-1/2 -translate-x-1/2"
               style={{
                 clipPath: "polygon(4% 0, 96% 0, 100% 50%, 96% 100%, 4% 100%, 0 50%)",
               }}>
            <div className="grid grid-cols-2 sm:grid-cols-4 text-center gap-4 sm:gap-6 md:gap-10">
              {/* Stat 1 */}
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight">
                  52<span className="text-red-500">+</span>
                </div>
                <p className="text-xs sm:text-sm mt-1 sm:mt-2 opacity-80 font-medium">
                  Country Presence
                </p>
              </div>

              {/* Stat 2 */}
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight">
                  125M<span className="text-red-500">+</span>
                </div>
                <p className="text-xs sm:text-sm mt-1 sm:mt-2 opacity-80 font-medium">
                  Happy Customers
                </p>
              </div>

              {/* Stat 3 */}
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight">
                  11000<span className="text-red-500">+</span>
                </div>
                <p className="text-xs sm:text-sm mt-1 sm:mt-2 opacity-80 font-medium">
                  Customer Touch-Points Worldwide
                </p>
              </div>

              {/* Stat 4 */}
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight">
                  41<span className="text-red-500">+</span>
                </div>
                <p className="text-xs sm:text-sm mt-1 sm:mt-2 opacity-80 font-medium">
                  Years of Manufacturing & R&D Excellence
                </p>
              </div>
            </div>
          </div>

          {/* Additional Background Image behind stats */}
          <div className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] w-full relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl">
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
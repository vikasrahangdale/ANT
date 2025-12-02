import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X, Maximize2, Play, Pause } from "lucide-react";
import React from 'react'

const WebStory = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState<number | null>(null);

  const progressWidth = useTransform(scrollXProgress, [0, 1], ["0%", "100%"]);

const stories = [
  {
    id: 1,
    image: "/story-1.jpg",
    title: "Excellence in Business 2012-2015",
    description: "Honored with the prestigious Excellence in Business award for three consecutive years, recognizing our outstanding performance and dedication to customer satisfaction in the two-wheeler industry.",
    color: "from-red-500 to-orange-500",
    presenter: "Mr. Venu Srinivasan, CMD TVS Motor Company",
    venue: "MACAU 2015 Dealer Conference",
    year: "2012-2015"
  },
  {
    id: 2,
    image: "/story-2.jpg",
    title: "Parts Performance Excellence 2012-2013",
    description: "Recognized for exceptional parts management and distribution efficiency, ensuring seamless availability and quality service for all TVS customers across our network.",
    color: "from-blue-500 to-cyan-500",
    presenter: "Mr. K.N Radhakrishnan, President & CEO TVS Motor",
    venue: "TVS Annual Awards Ceremony",
    year: "2012-2013"
  },
  {
    id: 3,
    image: "/story-3.jpg",
    title: "Performance Excellence 2013-2014",
    description: "Awarded for maintaining top-tier performance metrics, achieving remarkable growth in sales and customer satisfaction while setting new industry benchmarks.",
    color: "from-green-500 to-emerald-500",
    presenter: "Sudarshan Venu Srinivasan, JMD TVS Motor Company",
    venue: "National Dealer Meet",
    year: "2013-2014"
  },
  {
    id: 4,
    image: "/story-4.jpg",
    title: "National No.1 CSL Performance 2014-2015",
    description: "Crowned National Champion in Customer Service and Loyalty, demonstrating unparalleled commitment to after-sales service and customer relationship management.",
    color: "from-purple-500 to-pink-500",
    presenter: "Mr. K. N Radhakrishnan, President & CEO",
    venue: "MACAU International Conference",
    year: "2014-2015"
  },
  {
    id: 5,
    image: "/story-5.jpg",
    title: "Team Excellence & Collaboration Award",
    description: "Celebrating our dedicated team's remarkable achievement in collaborative success, showcasing unity and excellence in operations management and customer engagement.",
    color: "from-amber-500 to-orange-500",
    presenter: "TVS Leadership Committee",
    venue: "Annual Excellence Awards",
    year: "2014-2015"
  },
  {
    id: 6,
    image: "/story-6.jpg",
    title: "MACAU 2015 Dealer Conference Highlights",
    description: "A grand celebration of excellence at the international dealer conference in MACAU, where we were honored with multiple awards for outstanding performance.",
    color: "from-indigo-500 to-purple-500",
    presenter: "International Awards Committee",
    venue: "MACAU International Convention Center",
    year: "2015"
  },
  {
    id: 7,
    image: "/story-7.jpg",
    title: "Leadership Recognition Ceremony",
    description: "Special recognition from TVS Motor Company's leadership team for consistent excellence, innovation, and contribution to brand growth and market expansion.",
    color: "from-pink-500 to-rose-500",
    presenter: "TVS Executive Board",
    venue: "Corporate Leadership Summit",
    year: "2014"
  },
  {
    id: 8,
    image: "/story-8.jpg",
    title: "Milestone Achievement Celebration",
    description: "Marking a significant milestone in our journey of excellence, celebrating years of dedicated service, innovation, and customer-centric approach in the automotive industry.",
    color: "from-teal-500 to-cyan-500",
    presenter: "National Awards Committee",
    venue: "Industry Excellence Summit",
    year: "2013-2015"
  },
  {
    id: 9,
    image: "/story-9.jpg",
    title: "Vision for Future Excellence",
    description: "Looking forward to continuing our legacy of excellence with renewed commitment to innovation, customer satisfaction, and sustainable growth in partnership with TVS Motor Company.",
    color: "from-violet-500 to-purple-500",
    presenter: "Future Leadership Council",
    venue: "Strategic Vision Conference",
    year: "2016 Onwards"
  }
];

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.scrollWidth / stories.length;
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const nextSlide = () => {
    const next = currentIndex === stories.length - 1 ? 0 : currentIndex + 1;
    scrollToIndex(next);
  };

  const prevSlide = () => {
    const prev = currentIndex === 0 ? stories.length - 1 : currentIndex - 1;
    scrollToIndex(prev);
  };

  // Auto-play functionality
  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentIndex]);

  return (
    <section 
    id="achievements"
     className="py-12 scroll-mt-24 bg-white min-h-screen">
      <div className="container mx-auto px-4" ref={containerRef}>
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
            Our <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Success Story</span>
          </h1>
          <p className="text-gray-800 font-semibold max-w-2xl mx-auto">
          Step into our success story as we unfold 9 pivotal moments of triumph, recognition, and industry leadership that define our commitment to excellence and customer satisfaction.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-red-500 to-orange-500"
              style={{ width: progressWidth }}
            />
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-gray-400">
              {currentIndex + 1} / {stories.length}
            </span>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              {isPlaying ? 'Pause' : 'Auto-play'}
            </button>
          </div>
        </div>

        {/* Main Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all"
          >
            <ChevronRight size={24} />
          </button>

          {/* Horizontal Slider */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth py-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {stories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: currentIndex === index ? 1 : 0.95 }}
                transition={{ duration: 0.3 }}
                className={`flex-shrink-0 w-[85vw] md:w-[70vw] lg:w-[60vw] mx-4 snap-center transition-all duration-300 ${
                  currentIndex === index ? 'scale-100' : 'scale-95 opacity-80'
                }`}
              >
                <div className="bg-gray-800 rounded-3xl overflow-hidden shadow-2xl hover:shadow-2xl transition-all duration-300">
                  {/* Story Card */}
                  <div className="flex flex-col lg:flex-row">
                    {/* Image Section - Left */}
                    <div className="lg:w-7/12 relative overflow-hidden group cursor-pointer">
                      <div
                        className="h-64 lg:h-[500px] w-full relative bg-gradient-to-br via-transparent to-transparent"
                        onClick={() => setFullscreenImage(index)}
                      >
                        {/* Gradient Overlay */}
                        
                        {/* Image */}
                        <img
                          src={story.image}
                          alt={story.title}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                        
                        {/* Fullscreen Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setFullscreenImage(index);
                          }}
                          className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-sm transition-all"
                        >
                          <Maximize2 size={20} />
                        </button>
                      </div>
                    </div>

                    {/* Content Section - Right */}
                    <div className="lg:w-5/12 p-6 lg:p-8 bg-gradient-to-br from-gray-900 to-gray-800">
                      {/* Story Number */}
                      <div className="flex items-center gap-2 mb-6">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center text-white font-bold">
                          {story.id}
                        </div>
                        <span className="text-gray-400 text-sm">Story #{story.id}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                        {story.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {story.description}
                      </p>

                      {/* Color Indicator */}
                      <div className="mb-8">
                        <div className="flex items-center gap-2 mb-2">
                          <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${story.color}`} />
                          <span className="text-sm text-gray-400">Theme Color</span>
                        </div>
                        <div className="h-2 rounded-full bg-gray-700 overflow-hidden">
                          <div className={`h-full w-1/2 bg-gradient-to-r ${story.color}`} />
                        </div>
                      </div>

                      {/* Navigation Dots */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {stories.map((_, dotIndex) => (
                          <button
                            key={dotIndex}
                            onClick={() => scrollToIndex(dotIndex)}
                            className={`w-3 h-3 rounded-full transition-all ${
                              dotIndex === index
                                ? `bg-gradient-to-r ${story.color} scale-125`
                                : 'bg-gray-700 hover:bg-gray-600'
                            }`}
                          />
                        ))}
                      </div>

                      {/* View Details Button */}
                     
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="mt-8 overflow-x-auto pb-4">
          <div className="flex gap-3">
            {stories.map((story, index) => (
              <button
                key={story.id}
                onClick={() => scrollToIndex(index)}
                className={`flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden border-2 transition-all ${
                  currentIndex === index
                    ? 'border-orange-500 scale-105'
                    : 'border-transparent hover:border-gray-600'
                }`}
              >
                <div className="relative w-full h-full">
                  <img
                    src={story.image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {fullscreenImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
        >
          <button
            onClick={() => setFullscreenImage(null)}
            className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={30} />
          </button>
          
          <div className="relative max-w-7xl w-full h-full flex items-center justify-center p-4">
            <img
              src={stories[fullscreenImage].image}
              alt="Fullscreen"
              className="max-w-full max-h-full object-contain"
            />
            
            {/* Image Info */}
            <div className="absolute bottom-6 left-0 right-0 text-center">
              <div className="inline-block bg-black/60 backdrop-blur-sm px-6 py-3 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-1">
                  {stories[fullscreenImage].title}
                </h3>
                <p className="text-gray-300">
                  {stories[fullscreenImage].description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default WebStory;
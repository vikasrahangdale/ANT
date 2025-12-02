import { motion } from "framer-motion";

const VisionHero = () => {
  return (
    <section
     id="mission"
     className="relative scroll-mt-24 min-h-screen mt-10 bg-background flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Vision Statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <h2 className="text-accent font-bold text-sm tracking-[0.3em] uppercase">
              Mission
            </h2>
            <div className="space-y-2">
              <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight">
                Be The
                <br />
                Future Of
                <br />
                <span className="text-accent text-red-700">Mobility</span>
              </h1>
            </div>

            {/* Geometric Image Collage */}
           <div className="relative w-full aspect-square max-w-md mt-12">
  <div className="absolute inset-0 grid grid-cols-2 gap-3">

    {/* Image Box 1 */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="relative overflow-hidden"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)" }}
    >
      <img
        src="/vision-image2.png"
        alt="Image 1"
        className="w-full h-full p-2 object-cover"
      />
    </motion.div>

    {/* Image Box 2 (Big One) */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="relative overflow-hidden row-span-2"
      style={{ clipPath: "polygon(0 0, 100% 15%, 100% 100%, 0 100%)" }}
    >
      <img
         src="/vision-image2.png"
        alt="Image 2"
        className="w-full h-full p-6 object-cover object-start"
      />
    </motion.div>

    {/* Image Box 3 */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="relative overflow-hidden"
      style={{ clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0 100%)" }}
    >
      <img
      src="/vision-image3.png"
        alt="Image 3"
        className="w-full  h-full p-2 object-cover"
      />
    </motion.div>

  </div>
</div>

          </motion.div>



          {/* Right Side - Mission Statements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-12"
          >
            <h2 className="text-accent font-bold text-sm tracking-[0.3em] uppercase">
              VISION
            </h2>

            <div className="space-y-10">
              <div>
                <h3 className="text-2xl text-red-700 font-bold mb-3">Core Vision</h3>
                <p className="text-foreground/70 leading-relaxed">
                 To be recognized as a global leader in the manufacturing and export of two-wheeler and three-wheeler tyres, tubes, and spare parts — delivering quality that drives the world forward
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3">Inovation Vision</h3>
                <p className="text-foreground/70 leading-relaxed">
                 To build world-class, sustainable manufacturing facilities in India that combine advanced technology with human excellence — making “Made in India” a mark of trust across the globe.
                </p>
              </div>

              <div>
                <h3 className="text-2xl  text-red-700  font-bold mb-3">Growth Vision</h3>
                <p className="text-foreground/70 leading-relaxed">
                 To expand Attractive Group’s presence in every continent by 2030, creating a network of innovation, quality, and customer satisfaction in the automotive industry.
                </p>
              </div>

            <div>
                <h3 className="text-2xl font-bold mb-3">People & Values Vision</h3>
                <p className="text-foreground/70 leading-relaxed">
               To empower our team, partners, and customers through integrity, dedication, and innovation — ensuring that every product carries the heart and hard work of Attractive Group.
                </p>
              </div>


              
            <div>
                <h3 className="text-2xl  text-red-700  font-bold mb-3">Environmental Vision</h3>
                <p className="text-foreground/70 leading-relaxed">
               To commit to eco-friendly and sustainable production practices, minimizing our carbon footprint while maximizing quality and performance.
                </p>
              </div>


            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionHero;

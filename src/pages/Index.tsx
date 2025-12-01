import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Vision from "../components/Vision";
import Business from "../components/Business";
import Leadership from "../components/Leadership";
import Achievements from "../components/Achievements";
import Footer from "../components/Footer";
import OverView from "../components/OverView";
import VisionState from "@/components/VisionState";
import Map from '@/components/Map';

const Index = () => {
  return (
    <div className="min-h-screen pt-[80px]">
      <Navigation />
      <Hero />
      {/* <About /> */}
      <OverView/>
      <VisionState/>
      <Vision />
   
      <Business />
      <Leadership />
      <Map/>
      <Achievements />
      <Footer />
    </div>
  );
};

export default Index;

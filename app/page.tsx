import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import VideoDemo from "./components/VideoDemo";
import AppPreview from "./components/AppPreview";
import Spaces from "./components/Spaces";
import Waitlist from "./components/Waitlist";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      {/* <VideoDemo /> */}
      <AppPreview />
      <Spaces />
      <Waitlist />
      <Footer />
    </>
  );
}

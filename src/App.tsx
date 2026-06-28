import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Fleet from "./components/Fleet";
import Routes from "./components/Routes";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import CtaBand from "./components/CtaBand";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import { useReveal } from "./hooks/useReveal";

export default function App() {
  useReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Fleet />
        <Routes />
        <Testimonials />
        <Services />
        <WhyUs />
        <Faq />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}

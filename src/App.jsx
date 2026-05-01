import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Problems from "./components/Problems";
import WhyUs from "./components/WhyUs";
import Gallery from "./components/Gallery";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Location from "./components/Location";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />

      {/* HOME */}
      <section id="home">
        <Hero />
      </section>

      {/* ABOUT (FIXED MISSING SECTION) */}
      <section id="about">
        <About />
      </section>

      {/* SERVICES */}
      <section id="services">
        <Services />
      </section>

      {/* PROBLEMS */}
      <section id="problems">
        <Problems />
      </section>

      {/* WHY US */}
      <section id="whyus">
        <WhyUs />
      </section>

      {/* GALLERY */}
      <section id="gallery">
        <Gallery />
      </section>

      {/* BOOKING */}
      <section id="booking">
        <Booking />
      </section>

      {/* LOCATION */}
      <section id="location">
        <Location />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}
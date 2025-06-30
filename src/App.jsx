import Navbar from "./components/Navbar";
import RevealOnScroll from "./components/RevealOnSCroll";
import CustomerReviews from "./Sections/CustomerReviews";
import Footer from "./Sections/Footer";
import Hero from "./Sections/Hero";
import PopularProducts from "./Sections/PopularProducts";
import Services from "./Sections/Services";
import SpecialOffers from "./Sections/SpecialOffers";
import Subscribe from "./Sections/Subscribe";
import SuperQualty from "./Sections/SuperQualty";

function App() {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <div className="px-16 py-5 max-md:px-6 relative">
        <section id="home">
          <RevealOnScroll>
            <Hero />
          </RevealOnScroll>
        </section>
        <section className="pt-28" id="products">
          <RevealOnScroll>
            <PopularProducts />
          </RevealOnScroll>
        </section>
        <section className="pt-28" id="about-us">
          <RevealOnScroll>
            <SuperQualty />
          </RevealOnScroll>
        </section>
        <section className="pt-20">
          <RevealOnScroll>
            <Services />
          </RevealOnScroll>
        </section>
        <section className="pt-28">
          <RevealOnScroll>
            <SpecialOffers />
          </RevealOnScroll>
        </section>
        <section className="mt-16 py-14 bg-pale-blue">
          <RevealOnScroll>
            <CustomerReviews />
          </RevealOnScroll>
        </section>
        <section className="pt-16" id="contact-us">
          <RevealOnScroll>
            <Subscribe />
          </RevealOnScroll>
        </section>
      </div>
      <section className="mt-16 p-14  bg-black">
        <RevealOnScroll>
          <Footer />
        </RevealOnScroll>
      </section>
    </div>
  );
}

export default App;

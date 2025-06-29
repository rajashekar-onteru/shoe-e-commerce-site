import Navbar from "./components/Navbar";
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
        {" "}
        <section>
          <Hero />
        </section>
        <section className="pt-28">
          <PopularProducts />
        </section>
        <section className="pt-28">
          <SuperQualty />
        </section>
        <section className="pt-28">
          <Services />
        </section>
        <section className="pt-28">
          <SpecialOffers />
        </section>
        <section className="mt-16 py-14 bg-pale-blue">
          <CustomerReviews />
        </section>
        <section className="pt-10">
          <Subscribe />
        </section>
      </div>{" "}
      <section className="mt-16 p-14  bg-black">
        <Footer />
      </section>
    </div>
  );
}

export default App;

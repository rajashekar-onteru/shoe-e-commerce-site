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
    <div className="px-10 py-5 relative">
      <section>
        <Navbar />
      </section>{" "}
      <section>
        <Hero />
      </section>
      <section>
        {" "}
        <PopularProducts />
      </section>
      <section>
        <SuperQualty />
      </section>
      <section>
        {" "}
        <CustomerReviews />
      </section>
      <section>
        {" "}
        <Services />
      </section>
      <section>
        <SpecialOffers />
      </section>
      <section>
        <Footer />
      </section>
      <section>
        <Subscribe />
      </section>
    </div>
  );
}

export default App;

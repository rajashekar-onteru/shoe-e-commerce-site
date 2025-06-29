import PopularProductCard from "../components/PopularProductCard";
import { products } from "../Constants";

function PopularProducts() {
  return (
    <div id="products" className="max-container max-sm:mt-12 mt-16">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular </span>Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Discover trending picks that combine comfort, performance, and bold
          design.
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => {
          return <PopularProductCard key={products.name} {...product} />;
        })}
      </div>
    </div>
  );
}

export default PopularProducts;

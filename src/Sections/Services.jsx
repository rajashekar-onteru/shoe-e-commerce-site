import ServiceCard from "../components/ServiceCard";
import { services } from "../Constants";

function Services() {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((item, index) => {
        return <ServiceCard key={index} {...item} />;
      })}
    </section>
  );
}

export default Services;

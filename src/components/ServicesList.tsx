import ServiceCard from './ServiceCard';
import { services } from '../data/servicesData';

const ServicesList = () => {
  return (
    <div>
        <h1 className="lg:text-6xl md:text-5xl text-center text-lighter text-3xl  font-bold mb-20">
          Bringing Your Vision to Life
          <br/>
          with Expert Video Production
        </h1>
        <div className="w-full max-w-6xl mx-auto">
        {services.map(service => (
            <ServiceCard key={service.id} service={service} />
        ))}
        </div>
    </div>
  );
};

export default ServicesList;

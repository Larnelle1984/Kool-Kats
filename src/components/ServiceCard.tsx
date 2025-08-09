import { ServiceData } from '../data/servicesData';
import { ArrowUpRight } from 'lucide-react';

interface Props {
  service: ServiceData;
}

const ServiceCard = ({ service }: Props) => {
  return (
        <div className="group border-t border-gray-300/40 last:border-b transition-all duration-300 cursor-pointer">
        <div className="flex flex-col md:flex-row items-start justify-between px-4 py-8 md:items-center gap-4">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full md:w-auto">
            <img
                src={service.image}
                alt={service.title}
                className="w-full md:w-72 h-60 md:h-48 object-cover"
            />
            <div className="flex flex-col">
                <h3 className="text-2xl md:text-xl font-semibold">{service.title}</h3>
                <p className="text-lg md:text-base md:pr-64 text-gray-600 mt-2">{service.description}</p>
            </div>
            </div>
            <div className="flex items-center gap-2 mt-2 md:mt-0">
            <div className="relative font-semibold text-4xl md:text-8xl text-gray-300 group-hover:-translate-x-5 transition-transform duration-300">
                {service.number}
            </div>
            <div className="opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded text-lighter bg-primary flex items-center justify-center">
                <ArrowUpRight size={22} />
                </div>
            </div>
            </div>
        </div>
        </div>
  );
};

export default ServiceCard;

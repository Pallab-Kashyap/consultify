import { BarChart, Code } from "lucide-react";
import webd from "../../assets/service-wevd-img.png";
import ServiceCard from './ServiceCard';

const ServiceContainer = () => (
    <div className="bg-[#161616] py-16 lg:py-16">
      <div className="container mx-auto px-4 lg:px-16">
        <div className=" pb-6 mb-4 lg:pb-10 lg:mb-12 border-b-2 border-white/45">
        <h2 className="text-white text-3xl sm:text-5xl font-semibold  text-center lg:text-left ">
          Our Services
        </h2>
        </div>
        <div className=" space-y-16">
          <ServiceCard
            title="Web Development"
            description="Web development is crucial for establishing a strong online presence. Our experts create responsive websites that drive user engagement and conversions."
            icon={<Code size={24} />}
            img={webd}
          />
          <ServiceCard
            title="Digital Marketing"
            description="Digital Marketing Strategy that helps you reach your target audience and achieve your business goals through data-driven approaches."
            icon={<BarChart size={24} />}
            img={webd}
          />
        </div>
      </div>
    </div>
  );

export default ServiceContainer
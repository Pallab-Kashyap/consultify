import webd from "../../assets/service-wevd-img.png";
import ProjectCard from './ProjectCard';

const ProjectContainer = () => (
    <div className="bg-[#161616] py-16 lg:py-16">
      <div className="container mx-auto px-4 lg:px-16">
        <div className=" pb-6 mb-4 lg:pb-10 lg:mb-12 border-b-2 border-white/45">
        <h2 className="text-white text-3xl sm:text-5xl font-semibold  text-center lg:text-left ">
          Featured Projects
        </h2>
        </div>
        <div className=" space-y-16">
          <ProjectCard
            title="RBF Industries"
            description="Based in Hyderabad, this company supplies sustainable biomass briquettes for industrial fuel needs. Their eco-friendly biofuel solutions offer factories a cleaner, more efficient energy source, helping to reduce carbon footprints. Known for high-quality biomass briquettes, they are dedicated to supporting a sustainable future through reliable, environmentally conscious energy options."
            // icon={<Code size={24} />}
            img={webd}
            link="rbfindustries.in"
          />
          {/* <ProjectCard
            title="Example"
            description="Digital Marketing Strategy that helps you reach your target audience and achieve your business goals through data-driven approaches."
            // icon={<BarChart size={24} />}
            img={webd}
            link="www.example.com"
          /> */}
        </div>
      </div>
    </div>
  );

export default ProjectContainer
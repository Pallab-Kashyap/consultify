const ProjectCard = ({
  title = "1",
  description = "1",

  img = "w",
  link = "www.example.com",
}) => (
  <div className="rounded-lg  transform transition hover:shadow-xl sm:flex justify-between lggap-20">
    <div className="flex flex-col h-full lg:py-4">
      <div className="flex items-center space-x-4 mb-6">
        {/* <div className=" p-3 rounded-lg">{icon}</div> */}
        <h3 className="text-white text-xl lg:text-2xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-400 mb-6 lg:max-w-[55ch]">{description}</p>
      <a
        href={`https://${link}`}
        target="_blank"
        className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-700 transition w-fit absolute bottom-0"
      >
        {link}
      </a>
    </div>
    <div>
      <img src={img} alt="" className="h-72 rounded-3xl" />
    </div>
  </div>
);

export default ProjectCard;

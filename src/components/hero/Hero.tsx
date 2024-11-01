import { FaChevronDown } from "react-icons/fa";
import heroImg from "../../assets/hero-page-img.png";

const Hero = () => (
    <div className="bg-[#161616]  flex py-16 lg:py-0">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-32">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl lg:w-[14ch] font-bold mb-6 leading-tight">
              Consultify: Your go-to consultant agency for web
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto lg:mx-0">
              Consultify offers top-notch services in web development, digital
              marketing, and business consulting, tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-black px-8 py-3 rounded-md hover:bg-gray-200 transition transform hover:scale-105">
                Discover now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-md hover:bg-gray-800 transition transform hover:scale-105">
                Consult with us
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <img
                src={heroImg}
                alt="Consulting Illustration"
                className="rounded-lg shadow-2xl "
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
            <div className="flex justify-center text-xl text-white">
              <FaChevronDown />
            </div>
      </div>
    </div>
  );

export default Hero
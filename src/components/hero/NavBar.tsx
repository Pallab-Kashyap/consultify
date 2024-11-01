import { useState } from "react";
import logo from "../../assets/logo.png";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const MobileMenu = ({ isOpen = true, onClose = () => {} }) => (
  <div
    className={`absolute inset-0 max-h-fit bg-black/85 backdrop-blur-ms transform  sm:hidden ${
      isOpen ? "translate-x-0" : "translate-x-full"
    } transition-transform duration-300 ease-in-out z-30`}
  >
    <div className="flex justify-end p-4">
      <button onClick={onClose} className="text-white">
        <X size={24} />
      </button>
    </div>
    <div className="flex flex-col items-center space-y-8 pt-16 pb-20">
      <Link
        to="home"
        smooth={true}
        duration={600}
        className="text-white text-xl hover:text-gray-300 transition"
      >
        Home
      </Link>
      <Link
        to="services"
        smooth={true}
        duration={400}
        className="text-white text-xl hover:text-gray-300 transition"
      >
        Service
      </Link>
      <Link
        to="projects"
        smooth={true}
        duration={600}
        className="text-white text-xl hover:text-gray-300 transition"
      >
        Projects
      </Link>
      <Link
        to="home"
        smooth={true}
        duration={600}
        className="text-white text-xl hover:text-gray-300 transition"
      >
        About us
      </Link>
      <div className="flex flex-col space-y-4 w-full px-8">
        {/* <button className="text-white hover:text-gray-300 py-2">Log in</button> */}
        <Link
              to="contact"
              smooth={true}
              duration={1000}
         className="bg-white/90 text-black text-lg font-semibold px-4 py-2 rounded-md hover:bg-gray-800 mt-10  text-center">
          Contact Us
        </Link>
      </div>
    </div>
  </div>
);

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    // <nav className="sticky top-0 z-40 bg-[#161616]/80 backdrop-blur-sm">
    <nav className="bg-[#161616]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between h-16 sm:h-24">
          <div className="flex items-center gap-6">
            <div className="text-white text-2xl font-bold relative z-40">
              <img src={logo} alt="" className="h-8" />
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <div className="flex space-x-6">
                <Link
                  to="home"
                  smooth={true}
                  duration={600}
                  className="text-white text-sm hover:text-gray-300 cursor-pointer transition"
                >
                  Home
                </Link>
                <Link
                  to="services"
                  smooth={true}
                  duration={400}
                  className="text-white text-sm hover:text-gray-300 cursor-pointer transition"
                >
                  Service
                </Link>
                <Link
                  to="projects"
                  smooth={true}
                  duration={600}
                  className="text-white text-sm hover:text-gray-300 cursor-pointer transition"
                >
                  Projects
                </Link>
                <Link
                  to="home"
                  smooth={true}
                  duration={600}
                  className="text-white text-sm hover:text-gray-300 cursor-pointer transition"
                >
                  About us
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {/* <button className="text-white hover:text-gray-300 transition">
                  
                </button> */}
            <Link
              to="contact"
              smooth={true}
              duration={1000}
              className=" text-white text-xl font-semibold  px-4 py-2 rounded-xl hover:bg-white/90 hover:text-black transition-all hidden sm:block cursor-pointer"
            >
              Contact Us
            </Link>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </nav>
  );
};

export default NavBar;

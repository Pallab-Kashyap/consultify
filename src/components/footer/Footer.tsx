import { Github, Linkedin, Twitter } from 'lucide-react';


function Footer() {
    return (
        <footer className="bg-[#161616] text-gray-400 py-8">
          <div className="container mx-auto px-4 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-white text-lg font-medium ">
                  &copy; {new Date().getFullYear()} Consultify. All rights reserved.
                </h3>
              </div>
              <div className="md:justify-self-center">
                <div className="flex space-x-6">
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    <Github size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
              <div className="md:justify-self-end">
                <ul className="space-y-2 lg:space-y-0 lg:flex gap-6 ">
                  <li>
                    <a href="#" className="text-white transition">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white transition">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white transition">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white transition">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      );
}

export default Footer
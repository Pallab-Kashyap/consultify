import Footer from "../components/footer/Footer";
import NavBar from "../components/hero/NavBar";
import Hero from "../components/hero/Hero";
import ServiceContainer from "../components/services/ServiceContainer";
import ProjectContainer from "../components/projects/ProjectContainer";
import ContactForm from "../components/footer/ContactForm";
import { Element } from "react-scroll";

function Home() {
  return (
    <div className="min-h-screen bg-[#161616]">
      <header className="min-h-screen">
        <Element name="home">
          <NavBar />
          <Hero />
        </Element>
      </header>
      <main className="space-y-16 lg:space-y-0">
        <Element name="services">
          <ServiceContainer />
        </Element>
        <Element name="projects">
          <ProjectContainer />
        </Element>
        <Element name="contact">
          <ContactForm />
        </Element>
      </main>
      <Footer />
    </div>
  );
}

export default Home;

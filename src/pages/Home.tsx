import { About } from "../components/About";
import { Clients } from "../components/Clients";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";

export const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Clients />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

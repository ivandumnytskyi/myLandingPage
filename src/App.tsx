import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Contacts from "./components/Contscts";
import Footer from "./components/Footer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  gsap.registerPlugin(ScrollToPlugin);
  gsap.registerPlugin(ScrollTrigger);
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <Services />
      <Skills />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;

import Resume from "./Resume/resume";
import About from "./about";
import Contact from "./contact";
import Intro from "./intro";
import Projects from "./projects";

const Home = () => {
  return (
    <>
      <Intro />
      <About />
      <Resume />
      <Projects />
      <Contact />
     
    </>
  );
};

export default Home;

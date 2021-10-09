import { useEffect } from "react";
import About from "./components/about";
import Intro from "./components/intro";
import Navbar from "./components/navbar";
import Resume from "./components/Resume/resume";
import "./css/App.css";
import Projects from "./components/projects";
import { useDispatch } from "react-redux";
import { fetchProjects } from "./redux/actions";
import { useSelector } from "react-redux";
import Contact from "./components/contact";
import { fetchEducation } from "./redux/education/actions";
import { fetchAwards } from "./redux/awards/actions";
import { fetchExperience } from "./redux/experience/actions";

const App = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    const script = document.createElement("script");
    const script1 = document.createElement("script");
    const script2 = document.createElement("script");
    script1.src = "particles.js";
    script2.src = "app.js";
    script.src = "script.js";

    script1.async = false;
    script2.async = false;
    script.async = false;

    document.body.appendChild(script);
    document.body.appendChild(script1);
    document.body.appendChild(script2);

    dispatch(fetchProjects());
    dispatch(fetchEducation());
    dispatch(fetchAwards());
    dispatch(fetchExperience());
  }, []);
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </>
  );
};

export default App;

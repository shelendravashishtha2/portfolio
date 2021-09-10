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

const App = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    const script = document.createElement("script");
    const script1 = document.createElement("script");
    const script2 = document.createElement("script");
    script.src = "script.js";
    script1.src = "particles.js";
    script2.src = "app.js";

    script1.async = false;
    script2.async = false;
    script.async = false;
    document.body.appendChild(script1);
    document.body.appendChild(script2);
    document.body.appendChild(script);

    dispatch(fetchProjects());
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

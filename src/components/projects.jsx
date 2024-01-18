import { useSelector } from "react-redux";
import "../css/projects.css";
import ProjectsCard from "./projects-card";
let Projects = () => {
  let projects = useSelector((state) => state.projects.data);
  console.log(projects);
  return (
    <>
      <div id="projects" className="projects">
        <div className="projects-heading">
          <h1>Projects</h1>
        </div>
        <div className="project-content">
          {projects
            ? projects.projects.map((e, idx) => {
                return <ProjectsCard key={idx} data={e} />;
              })
            : ""}
        </div>
      </div>
    </>
  );
};

export default Projects;

import SideBar from "./sidebar";
import "../../css/resume.css";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import Awards from "./awards";
const Resume = () => {
  return (
    <>
      <div className="resume">
        <SideBar />
        <div className="resume-content">
          <Education />
          <Experience />
          <Skills
            image={[
              "html.png",
              "css.png",
              "javascript.png",
              "react.png",
              "flutter.png",
              "java.png",
              "python.png",
              "django.jpeg",
              "firebase.png",
              "nodejs.png",
              "sql.png",
              "github.png",
            ]}
          />
          <Awards />
        </div>
      </div>
    </>
  );
};

export default Resume;

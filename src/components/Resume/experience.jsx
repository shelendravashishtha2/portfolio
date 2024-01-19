import { useSelector } from "react-redux";
import ExperienceContainer from "./experience-container";

let Experience = () => {
  let experience = useSelector((state) => state.experience.data);
  return (
    <>
      <div id="experience" className="experience">
        <h1>Experience</h1>
        {experience
          ? experience.experience.map((data, idx) => (
              <ExperienceContainer data={data} key={idx} />
            ))
          : ""}
      </div>
    </>
  );
};

export default Experience;

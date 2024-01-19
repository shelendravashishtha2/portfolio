import { useSelector } from "react-redux";
import EducationContainer from "./education-container";

let Education = () => {
  let education = useSelector((state) => state.education.data);
  return (
    <>
      <div id="education" className="education">
        <h1>Education</h1>
        {education
          ? education.education.map((data, idx) => (
              <EducationContainer data={data} key={idx} />
            ))
          : ""}
      </div>
    </>
  );
};

export default Education;

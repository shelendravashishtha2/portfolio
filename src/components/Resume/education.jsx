import EducationContainer from "./education-container";

let Education = () => {
  return (
    <>
      <div id="education" className="education">
        <h1>Education</h1>
        <EducationContainer
          data={{
            trade: "Computer Science Engineering",
            icon: "school",
            course: "Bachelor of Technology",
            agg: "CGPA : 8.5/10",
            place: "Noida, India",
            year: "2018-2022",
            schoolName: "Noida Institute of Engineering and Technology",
          }}
        />
        <EducationContainer
          data={{
            trade: "Science (PCM)",
            icon: "class",
            course: "Intermediate",
            agg: "Percentage : 78.33",
            place: "Aligarh, India",
            year: "2017-2018",
            schoolName: "Saraswati Vidya Mandir Intermediate School",
          }}
        />
      </div>
    </>
  );
};

export default Education;

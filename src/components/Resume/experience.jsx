import ExperienceContainer from "./experience-container";
import Skills from "./skills";

let Experience = () => {
  return (
    <>
      <div id="experience" className="experience">
        <h1>Experience</h1>
        <ExperienceContainer
          data={{
            icon: "work",
            name: "Binarydots Technology Pvt. Ltd.",
            role: "Mobile Application Developer Intern",
            list: [
              `Developed Mobile Application user interface called for
                application called Fretbox`,
              `API Integration with User Interface`,
            ],
            duration: "December 2020 - Janaury2021",
          }}
        />
        <ExperienceContainer
          data={{
            icon: "work",
            name: "Freelancer",
            role: "Mobile Application Developer And Django Developer",
            list: [
              `Developed Mobile Application user interface`,
              `Developed Application Interface for In-App Integration In
                  Django`,
              `API Integration with User Interface`,
            ],
            duration: "December 2020-2021",
          }}
        />
       
      </div>
    </>
  );
};

export default Experience;

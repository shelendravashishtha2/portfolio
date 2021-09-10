let Skills = (props) => {
  return (
    <>
      <div className="skills">
        <h1>Skills</h1>
        <div className="first">
          <div className="container-content">
            <div className="inner-skill-container">
              {props.image.map((e, index) => (
                <div key={index}>
                  <img src={`images/${e}`} className={(e==="django.jpeg" || e==="github.png") ? "half-radius" : ""} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

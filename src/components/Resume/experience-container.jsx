let ExperienceContainer = (props) => {
  return (
    <>
      <div className="first">
        <div className="container-content">
          <div className="icon">
            <span className="material-icons">{props.data.icon}</span>
          </div>
          <div className="edu-detail">
            <div className="edu-name">{props.data.name}</div>
            <div className="exp-role">{props.data.role}</div>
            <div className="exp-duration">{props.data.duration}</div>
            <ul className="exp-list">
              {props.data.list.map((e, index) => (
                <li key={index}>{e}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceContainer;

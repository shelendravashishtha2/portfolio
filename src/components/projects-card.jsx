let ProjectsCard = (props) => {
  return (
    <>
      <div className="card">
        <div className="icon">
          <span className="material-icons">{props.data.icon}</span>
        </div>
        <h2>{props.data.title}</h2>
        <div className="line" />
        <div className="tech-stack">{props.data.tech}</div>
        <div className="description">{props.data.description}</div>
        <div className="links">
          {props.data.github ? (
            <h4>
              <a target="_blank" href={props.data.github}>Github</a>
            </h4>
          ) : (
            ""
          )}
          {props.data.web ? (
            <h4>
              <a target="_blank" href={props.data.web}>Web Site</a>
            </h4>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectsCard;

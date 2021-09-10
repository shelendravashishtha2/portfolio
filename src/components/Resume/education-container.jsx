const EducationContainer = (props) => {
  return (
    <>
      <div className="first">
        <div className="container-content">
          <div className="icon">
            <span className="material-icons">{props.data.icon}</span>
          </div>
          <div className="edu-detail">
            <div className="edu-name">
              {props.data.schoolName}
            </div>
            <div className="edu-course">{props.data.course}</div>
            <div className="edu-trade">{props.data.trade}</div>
            <div className="edu-aggregate">{props.data.agg}</div>
            <div className="edu-place">{props.data.place}</div>
            <div className="edu-year">{props.data.year}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationContainer;

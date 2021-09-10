import "../css/intro.css";

const Intro = () => {
  return (
    <div className="intro">
      <div id="particles-js"></div>
      <div className="content">
        <div className="p1">Hey! I Am</div>
        <div className="p2">Shelendra</div>
        <div className="p3">
          I Like <span className="typewriter"></span>
        </div>
      </div>
      <div className="trans-button">
        <span className="material-icons">expand_more</span>
      </div>
    </div>
  );
};

export default Intro;

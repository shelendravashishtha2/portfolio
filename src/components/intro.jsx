import { useEffect } from "react";
import "../css/intro.css";

const Intro = () => {
  useEffect(() => {
    const scriptParticle = document.createElement("script");
    scriptParticle.src = "particles.js";
    scriptParticle.async = false;
    document.body.appendChild(scriptParticle);
    const scriptApp = document.createElement("script");
    scriptApp.src = "app.js";
    scriptApp.async = false;
    document.body.appendChild(scriptApp);

    // const scriptCustom = document.createElement("script");
    // scriptCustom.src = "script.js";
    // scriptCustom.async = false;
    // document.body.appendChild(scriptCustom);

    return () => {
      document.body.removeChild(scriptParticle);
      document.body.removeChild(scriptApp);
      // document.body.removeChild(scriptCustom);
    };
  }, []);
  return (
    <div id="intro" className="intro">
      <div id="particles-js"></div>
      <script src="particles.js" async={false}></script>
      <script src="app.js" async={false}></script>
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

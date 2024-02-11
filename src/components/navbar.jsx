import "../css/navbar.css";
import { useLocation, useNavigate } from "react-router-dom";
import Music from "./Books/music/music_button";

const Navbar = () => {
  const navigate = useNavigate();
  const paths = useLocation();
  const getPathStatus = (event, linkPath) => {
    const path = paths.pathname;
    if (path !== "/") {
      navigate("/");
      setTimeout(() => {
        let el = document.querySelector(linkPath);
        if (el) {
          document.querySelector(linkPath).scrollIntoView();
        }
      }, 300);
    } else {
      document.querySelector(linkPath).scrollIntoView();
    }
  };

  return (
    <>
      <div id="nav" className="nav">
        <div className="name">Shelendra</div>
        <div className="links">
          <div className="link">
            <span onClick={(e) => getPathStatus(e, "#intro")}>Home</span>
          </div>
          <div className="link">
            <span onClick={(e) => getPathStatus(e, "#about")}>About</span>
          </div>
          <div className="link">
            <span onClick={(e) => getPathStatus(e, "#resume")}>Resume</span>
          </div>
          <div className="link">
            <span onClick={(e) => getPathStatus(e, "#projects")}>Project</span>
          </div>
          <div className="link">
            <span onClick={(e) => getPathStatus(e, "#contact")}>Contact</span>
          </div>
          <div className="link">
            <span onClick={() => navigate("/books")}>Books</span>
          </div>
          <div className="link">
            <span onClick={() => navigate("/poetry")}>Poetry</span>
          </div>
        </div>
        <div className="burger">
          <span className="material-icons">menu</span>
        </div>
      </div>
      <div
        style={{
          display: "none",
        }}
        className="nav-links"
      >
        <div className="nav-link">
          <span
            onClick={() => document.querySelector("#intro").scrollIntoView()}
          >
            Home
          </span>
        </div>
        <div className="nav-link">
          <span
            onClick={() => document.querySelector("#about").scrollIntoView()}
          >
            About
          </span>
        </div>
        <div className="nav-link">
          <span
            onClick={() =>
              document.querySelector("#education").scrollIntoView()
            }
          >
            Resume
          </span>
        </div>
        <div className="nav-link">
          <span
            onClick={() => document.querySelector("#projects").scrollIntoView()}
          >
            Project
          </span>
        </div>
        <div className="nav-link">
          <span
            onClick={() => document.querySelector("#contact").scrollIntoView()}
          >
            Contact
          </span>
        </div>
      </div>
      <div
        className="musicplayer"
        style={{
          position: "fixed",
          left: "5px",
          zIndex: "99999999",
        }}
      >
        <Music />
      </div>
    </>
  );
};

export default Navbar;

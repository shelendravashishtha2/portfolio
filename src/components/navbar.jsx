import "../css/navbar.css";

const Navbar = () => {
  return (
    <>
      <div id="nav" className="nav">
        <div className="name">Shelendra</div>
        <div className="links">
          <div className="link">
            <a
              onClick={() => document.querySelector("#intro").scrollIntoView()}
            >
              Home
            </a>
          </div>
          <div className="link">
            <a
              onClick={() => document.querySelector("#about").scrollIntoView()}
            >
              About
            </a>
          </div>
          <div className="link">
            <a
              onClick={() => document.querySelector("#resume").scrollIntoView()}
            >
              Resume
            </a>
          </div>
          <div className="link">
            <a
              onClick={() =>
                document.querySelector("#projects").scrollIntoView()
              }
            >
              Project
            </a>
          </div>
          <div className="link">
            <a
              onClick={() =>
                document.querySelector("#contact").scrollIntoView()
              }
            >
              Contact
            </a>
          </div>
        </div>
        <div className="burger">
          <span className="material-icons">menu</span>
        </div>
      </div>
      <div className="nav-links">
        <div className="nav-link">
          <a onClick={() => document.querySelector("#intro").scrollIntoView()}>
            Home
          </a>
        </div>
        <div className="nav-link">
          <a onClick={() => document.querySelector("#about").scrollIntoView()}>
            About
          </a>
        </div>
        <div className="nav-link">
          <a onClick={() => document.querySelector("#education").scrollIntoView()}>
            Resume
          </a>
        </div>
        <div className="nav-link">
          <a
            onClick={() => document.querySelector("#projects").scrollIntoView()}
          >
            Project
          </a>
        </div>
        <div className="nav-link">
          <a
            onClick={() => document.querySelector("#contact").scrollIntoView()}
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;

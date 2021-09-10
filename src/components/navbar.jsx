import "../css/navbar.css"

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="name">Shelendra</div>
        <div className="links">
          <div className="link">
            <a>Home</a>
          </div>
          <div className="link">
            <a>About</a>
          </div>
          <div className="link">
            <a>Resume</a>
          </div>
          <div className="link">
            <a>Project</a>
          </div>
          <div className="link">
            <a>Contact</a>
          </div>
        </div>
        <div className="burger">
          <span className="material-icons">menu</span>
        </div>
      </div>
      <div className="nav-links">
        <div className="nav-link">
          <a>Home</a>
        </div>
        <div className="nav-link">
          <a>About</a>
        </div>
        <div className="nav-link">
          <a>Resume</a>
        </div>
        <div className="nav-link">
          <a>Project</a>
        </div>
        <div className="nav-link">
          <a>Contact</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;

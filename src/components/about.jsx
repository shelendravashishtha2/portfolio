import "../css/about.css";

let About = () => {
  return (
    <>
      <div id="about" className="about">
        <div className="intro-image">
          <img src="profile-img.png" />
        </div>
        <div className="intro-table">
          <div className="about-heading">About Me</div>

          <h2>learning is the best thing that happened to me.</h2>

          <div className="personal-detail">
            <div className="head">
              <ul>
                <li>Name : </li>
                <li>Email : </li>
                <li>Phone : </li>
                <li>Country : </li>
                <li>City : </li>
              </ul>
            </div>
            <div className="detail">
              <ul>
                <li>Shelendra Vashishtha</li>
                <li>shia.sharma123@gmail.com</li>
                <li>(+91) 9149125098</li>
                <li>India</li>
                <li>Aligarh</li>
              </ul>
            </div>
          </div>
          <div className="download-button">
            <a type="download" href="Resume.pdf" target="_blank">
              Download
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

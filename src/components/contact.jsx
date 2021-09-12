import "../css/contact.css";

const Contact = () => {
  return (
    <>
      <div id="contact" className="contacts">
        <h1>Contact Me</h1>
        <div className="container">
          <div className="contact-container">
            <a href="tel:9149125098">
              <span className="material-icons">phone</span>{" "}
            </a>
          </div>
          <div className="contact-container">
            <a href="mailto:shia.sharma123@gmail.com" target="_blank">
              <span className="material-icons">email</span>
            </a>
          </div>
          <div className="contact-container">
            <a
              href="https://www.linkedin.com/in/shelendra-vashishtha-246169184/"
              target="_blank"
            >
              <span className="material-icons">south_america</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

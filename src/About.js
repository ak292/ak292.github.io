import "./css/About.css";
import Navbar from "./Navbar";

function About() {
  return (
    <div className="double-container">
      <Navbar />
      <div className="container">
        <div className="container-two">
          <p className="name">
            Ahmed <span className="lastname">Keshka</span>
          </p>
          <p className="job-title">Software Developer</p>
          <p className="location">
            Ottawa, Canada - <span className="email">ahmedkeshkaap@gmail.com</span>
          </p>
        </div>
        <div className="intro-paragraph">
          I'm a Computer Science graduate who is passionate about all things related to Web
          Development and Machine Learning
        </div>
        <div className="buttons-container">
          <div className="icons-container">
            <a href="https://linkedin.com/in/ahmed-keshka" target="_blank" rel="noreferrer">
              <i className="icons fa-brands fa-3x fa-linkedin"></i>
            </a>
            <a href="https://github.com/ak292" target="_blank" rel="noreferrer">
              <i className="icons fa-brands fa-3x fa-github"></i>
            </a>
          </div>
          <a
            href="https://drive.google.com/file/d/1_oN9afXkWrC10SafFdZijHe5QBuH8Xcy/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="alink"
          >
            <button>View my CV </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;

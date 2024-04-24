import { useContext } from "react";
import { StateContext } from "./StateContext";
import "./css/Navbar.css";

function Navbar() {
  const { states, onClickHandler } = useContext(StateContext);

  const onClick = (event) => {
    event.preventDefault();
    const clickedState = event.target.innerText;
    onClickHandler(clickedState);
  };

  return (
    <div className="colored-block">
      <div className="img-container">
        <img src={require("./images/ak.jpg")} alt="AK" />
        <div className="link-container">
          <a
            onClick={onClick}
            className={states.aboutState ? "a-tag active" : "a-tag"}
            href="/"
          >
            About
          </a>
          <a
            onClick={onClick}
            className={states.educationState ? "a-tag active" : "a-tag"}
            href="/"
          >
            Education
          </a>
          <a
            onClick={onClick}
            className={states.experienceState ? "a-tag active" : "a-tag"}
            href="/"
          >
            Experience
          </a>
          <a
            onClick={onClick}
            className={states.projectsState ? "a-tag active" : "a-tag"}
            href="/"
          >
            Projects
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

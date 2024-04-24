import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import { useContext } from "react";
import { StateContext } from "./StateContext";

function App() {
  const { states } = useContext(StateContext);

  return (
    <div>
      {states.aboutState && <About />}
      {states.educationState && <Education />}
      {states.experienceState && <Experience />}
      {states.projectsState && <Projects />}
    </div>
  );
}

export default App;

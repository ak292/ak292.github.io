import { createContext, useState } from "react";

const StateContext = createContext();

const StateProvider = ({ children }) => {
  const activeStates = {
    aboutState: true,
    educationState: false,
    experienceState: false,
    projectsState: false,
  };

  const [states, setStates] = useState(activeStates);

  const onClickHandler = (clickedState) => {
    const updatedStates = { ...activeStates };
    clickedState = `${clickedState.toLowerCase()}State`;
    Object.keys(updatedStates).forEach((key) => {
      // this line sets the clicked state to true
      // and all others false
      updatedStates[key] = key === clickedState;
    });

    setStates(updatedStates);
  };

  return (
    <StateContext.Provider value={{ states, onClickHandler }}>
      {children}
    </StateContext.Provider>
  );
};

export { StateContext, StateProvider };

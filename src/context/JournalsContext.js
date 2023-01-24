import React, { useState } from "react";

const JournalsContext = React.createContext();
export const JournalsProvider = JournalsContext.Provider;
export const JournalsConsumer = JournalsContext.Consumer;

export const JournalsContextProvider = (props) => {
  const [journals, setJournals] = useState([]);

  return (
    <JournalsContext.Provider value={{ journals, setJournals }}>
      {props.children}
    </JournalsContext.Provider>
  );
};

export default JournalsContext;

import React, { useReducer } from "react";
import { reducer, initialState } from "../state/reducer";
import PublishMessage from "./PublishMessage";
import MessageBoard from "./MessageBoard";
import Context from "../context";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("state", state);

  return (
    <Context.Provider value={{state, dispatch}}>
      <div>
        <h2>Reaction</h2>
        <hr />
        <PublishMessage />
        <hr />
        <MessageBoard />
      </div>
    </Context.Provider>
  );
}

export default App;

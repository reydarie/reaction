import React, { useState } from "react";
import {useAppContext} from './hooks'
import { newMessage } from "../state/actions";

function PublishMessage() {
  const {pubsub : { publish}} = useAppContext();
  const [text, setText] = useState("");

  const updateText = (event) => {
    setText(event.target.value);
  };

  const publishMessage = () => {
    publish(newMessage(text));
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") publishMessage();
  };

  return (
    <div>
      <h3>Got Something to say?</h3>
      <input
        value={text}
        onChange={updateText}
        onKeyPress={handleKeyPress}
      />{" "}
      <button onClick={publishMessage}>Publish it!</button>
    </div>
  );
}

export default PublishMessage;

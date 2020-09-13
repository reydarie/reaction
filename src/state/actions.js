import { NEW_MESSAGE, SET_USERNAME } from "./types";
import uuid from "uuid/v4";

export const newMessage = (text) => ({
  type: NEW_MESSAGE,
  item: { id: uuid(), text, timestamp: Date.now() },
});

export const setUsername = (username) => ({ type: SET_USERNAME, username });

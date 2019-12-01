import uuid from "uuid";
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "../actions/types";

const initialState = {
  items: [
    { id: uuid(), name: "First Task", isCompleted: true },
    { id: uuid(), name: "Second Task", isCompleted: false },
    { id: uuid(), name: "Third Task", isCompleted: true },
    { id: uuid(), name: "Fourth Task", isCompleted: false }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state
      };
    default:
      return state;
  }
}

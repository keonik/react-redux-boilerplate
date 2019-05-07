import { ADD_ITEM } from "../actions/TodoList"

let initialState = {
  listItems: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM: {
      console.log("Reducer - Updating the state with", action.payload)
      state = {
        listItems: [...state.listItems, action.payload]
      }
      break
    }
    default: {
      break
    }
  }
  return state
}

import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from "../actions/TodoList"

let initialState = {
  listItems: []
}

export default function(state = initialState, action) {
  let newState = { ...state }

  switch (action.type) {
    case ADD_ITEM: {
      newState = {
        listItems: [...state.listItems, action.payload]
      }
      break
    }
    case DELETE_ITEM: {
      newState = {
        listItems: state.listItems.filter((item, i) => i !== action.payload)
      }
      break
    }
    case EDIT_ITEM: {
      newState = {
        listItems: [
          ...state.listItems.slice(0, action.payload.index),
          action.payload.name,
          ...state.listItems.slice(action.payload.index + 1)
        ]
      }
      break
    }
    default: {
      break
    }
  }

  return newState
}

import { CHANGE_STEP, CHANGE_PAGE } from "../actions/App"

let initialState = {
  page: "Home",
  step: "start"
}

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_PAGE: {
      state = {
        ...state,
        page: action.payload
      }
      break
    }
    case CHANGE_STEP: {
      state = {
        ...state,
        step: action.payload
      }
      break
    }
    default: {
      break
    }
  }
  return state
}

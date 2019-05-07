export const ADD_ITEM = "ADD_ITEM"
export const DELETE_ITEM = "DELETE_ITEM"
export const EDIT_ITEM = "EDIT_ITEM"

export const addItem = item => {
  return {
    payload: item,
    type: ADD_ITEM
  }
}

export const deleteItem = index => {
  return {
    payload: index,
    type: DELETE_ITEM
  }
}

export const editItem = updatedItem => {
  return {
    payload: updatedItem,
    type: EDIT_ITEM
  }
}

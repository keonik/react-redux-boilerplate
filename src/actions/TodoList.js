export const ADD_ITEM = "ADD_ITEM"

export const addItem = item => {
  console.log("Actions - Item to add is", item)
  return {
    payload: item,
    type: ADD_ITEM
  }
}

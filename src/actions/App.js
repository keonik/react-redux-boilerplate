export const CHANGE_STEP = "CHANGE_STEP"
export const CHANGE_PAGE = "CHANGE_PAGE"

export const changeStep = step => {
  return {
    payload: step,
    type: CHANGE_STEP
  }
}

export const changePage = page => {
  return {
    payload: page,
    type: CHANGE_PAGE
  }
}

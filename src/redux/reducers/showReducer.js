import TYPES from "../types"

const initState = {
  show: false,
}

const showReducer = (state = initState, action) => {
  switch (action.type) {
    case TYPES.SHOW:
      return {
        show: action.payload,
      }
    default:
      return state
  }
}

export default showReducer

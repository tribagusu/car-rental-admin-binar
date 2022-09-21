import TYPES from "../types"

const initState = {
  carFiltered: [],
}

const carFilteredReducer = (state = initState, action) => {
  switch (action.type) {
    case TYPES.GET_CAR_FILTERED:
      return {
        carFiltered: action.payload,
      }
    default:
      return state
  }
}

export default carFilteredReducer

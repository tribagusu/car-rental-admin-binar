import TYPES from "../types"

const initState = {
  cars: [],
}

const carReducer = (state = initState, action) => {
  switch (action.type) {
    case TYPES.GET_CARS:
      return {
        cars: action.payload,
      }
    default:
      return state
  }
}

export default carReducer

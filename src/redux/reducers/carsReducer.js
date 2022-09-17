import TYPES from "../types"

const initState = {
  cars: [],
  car: {},
}

const carReducer = (state = initState, action) => {
  switch (action.type) {
    case TYPES.GET_CARS:
      return {
        ...state,
        cars: action.payload,
      }
    case TYPES.GET_CAR:
      return {
        ...state,
        car: action.payload,
      }
    default:
      return state
  }
}

export default carReducer

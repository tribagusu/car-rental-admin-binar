import TYPES from "../types"

const initState = {
  cars: [],
  car: {},
  orders: [],
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
    case TYPES.GET_ORDERS:
      return {
        ...state,
        orders: action.payload,
      }
    default:
      return state
  }
}

export default carReducer

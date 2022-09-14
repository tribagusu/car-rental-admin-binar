import TYPES from "../types"

const initState = {
  listDate: "",
  listMonth: "",
  theMonth: "test",
}

const rentedCarReducer = (state = initState, action) => {
  switch (action.type) {
    case TYPES.GET_RENTED_CAR_DAY:
      return {
        ...state,
        listDate: action.payload,
      }

    case TYPES.GET_RENTED_CAR_MONTH:
      return {
        ...state,
        listMonth: action.payload,
      }

    case TYPES.THE_MONTH:
      return {
        ...state,
        theMonth: action.payload,
      }
    default:
      return state
  }
}

export default rentedCarReducer

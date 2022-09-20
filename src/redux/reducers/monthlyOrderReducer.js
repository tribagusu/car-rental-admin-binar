import TYPES from "../types"

const initState = {
  sepOrder: [],
  octOrder: [],
  novOrder: [],
  decOrder: [],
}

const monthlyOrderReducer = (state = initState, action) => {
  switch (action.type) {
    case TYPES.GET_SEP_ORDER:
      return {
        ...state,
        sepOrder: action.payload,
      }
    case TYPES.GET_OCT_ORDER:
      return {
        ...state,
        octOrder: action.payload,
      }
    case TYPES.GET_NOV_ORDER:
      return {
        ...state,
        novOrder: action.payload,
      }
    case TYPES.GET_DEC_ORDER:
      return {
        ...state,
        decOrder: action.payload,
      }
    default:
      return state
  }
}

export default monthlyOrderReducer

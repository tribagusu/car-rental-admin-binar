import TYPES from "../types"

const initState = {
  dataOrder: [],
}

const dataOrderReducer = (state = initState, action) => {
  switch (action.type) {
    case TYPES.GET_SEP_DAILY_ORDER:
      return {
        dataOrder: action.payload,
      }
    case TYPES.GET_OCT_DAILY_ORDER:
      return {
        dataOrder: action.payload,
      }
    case TYPES.GET_NOV_DAILY_ORDER:
      return {
        dataOrder: action.payload,
      }
    case TYPES.GET_DEC_DAILY_ORDER:
      return {
        dataOrder: action.payload,
      }
    default:
      return state
  }
}

export default dataOrderReducer

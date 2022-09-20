import TYPES from "../types"

const initState = {
  sepDailyOrder: [],
  octDailyOrder: [],
  novDailyOrder: [],
  decDailyOrder: [],
}

const dailyOrderReducer = (state = initState, action) => {
  switch (action.type) {
    case TYPES.GET_SEP_DAILY_ORDER:
      return {
        ...state,
        sepDailyOrder: action.payload,
      }
    case TYPES.GET_OCT_DAILY_ORDER:
      return {
        ...state,
        octDailyOrder: action.payload,
      }
    case TYPES.GET_NOV_DAILY_ORDER:
      return {
        ...state,
        novDailyOrder: action.payload,
      }
    case TYPES.GET_DEC_DAILY_ORDER:
      return {
        ...state,
        decDailyOrder: action.payload,
      }
    default:
      return state
  }
}

export default dailyOrderReducer

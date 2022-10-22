import TYPES from "../types"

const initState = {
  dataOrder: [],
  theMonthOrderData: [],
}

const dataOrderReducer = (state = initState, action) => {
  switch (action.type) {
    case TYPES.GET_DATA_ORDER:
      return {
        dataOrder: action.payload,
      }
    case TYPES.GET_THE_MONTH_ORDER_DATA:
      return {
        ...state,
        theMonthOrderData: action.payload,
      }
    default:
      return state
  }
}

export default dataOrderReducer

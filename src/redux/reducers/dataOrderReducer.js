import TYPES from "../types"

const initState = {
  dataOrder: [],
}

const dataOrderReducer = (state = initState, action) => {
  switch (action.type) {
    case TYPES.GET_DATA_ORDER:
      return {
        dataOrder: action.payload,
      }
    default:
      return state
  }
}

export default dataOrderReducer

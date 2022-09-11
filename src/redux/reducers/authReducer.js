import TYPES from "../types"

const initState = {
  token: "",
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case TYPES.POST_LOGIN:
      return {
        token: action.payload,
      }
    default:
      return state
  }
}

export default authReducer

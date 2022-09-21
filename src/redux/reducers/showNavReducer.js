import TYPES from "../types"

const initState = {
  showNav: true,
}

const showNavReducer = (state = initState, action) => {
  switch (action.type) {
    case TYPES.SHOW_NAV:
      return {
        showNav: action.payload,
      }
    default:
      return state
  }
}

export default showNavReducer

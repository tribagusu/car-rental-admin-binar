import TYPES from "../types"

const initState = {
  searchTerm: "",
}

const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case TYPES.SEARCH_TERM:
      return {
        searchTerm: action.payload,
      }
    default:
      return state
  }
}

export default searchReducer

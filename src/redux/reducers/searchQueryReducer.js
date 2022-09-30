import TYPES from "../types"

const initState = {
  searchQuery: "",
}

const searchQueryReducer = (state = initState, action) => {
  switch (action.type) {
    case TYPES.SEARCH_QUERY:
      return {
        searchQuery: action.payload,
      }
    default:
      return state
  }
}

export default searchQueryReducer

import { combineReducers } from "redux"
import authReducer from "./authReducer"
import showNavReducer from "./showNavReducer"
import carsReducer from "./carsReducer"
import searchQueryReducer from "./searchQueryReducer"
import dataOrderReducer from "./dataOrderReducer"

const rootReducer = combineReducers({
  auth: authReducer,
  dataOrder: dataOrderReducer,
  showNav: showNavReducer,
  cars: carsReducer,
  searchQuery: searchQueryReducer,
})

export default rootReducer

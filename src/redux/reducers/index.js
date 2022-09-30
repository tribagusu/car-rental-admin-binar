import { combineReducers } from "redux"
import authReducer from "./authReducer"
import showNavReducer from "./showNavReducer"
import carsReducer from "./carsReducer"
import searchQueryReducer from "./searchQueryReducer"
import dataOrderReducer from "./dataOrderReducer"
import carFilteredReducer from "./carFilteredReducer"

const rootReducer = combineReducers({
  auth: authReducer,
  dataOrder: dataOrderReducer,
  showNav: showNavReducer,
  cars: carsReducer,
  searchQuery: searchQueryReducer,
  carFiltered: carFilteredReducer,
})

export default rootReducer

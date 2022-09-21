import { combineReducers } from "redux"
import authReducer from "./authReducer"
import showNavReducer from "./showNavReducer"
import carsReducer from "./carsReducer"
import searchReducer from "./searchReducer"
import dataOrderReducer from "./dataOrderReducer"
import carFilteredReducer from "./carFilteredReducer"

const rootReducer = combineReducers({
  auth: authReducer,
  dataOrder: dataOrderReducer,
  showNav: showNavReducer,
  cars: carsReducer,
  search: searchReducer,
  carFiltered: carFilteredReducer,
})

export default rootReducer

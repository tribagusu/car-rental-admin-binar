import { combineReducers } from "redux"
import authReducer from "./authReducer"
import rentedCarReducer from "./rentedCarReducer"
import showReducer from "./showReducer"
import carsReducer from "./carsReducer"
import searchReducer from "./searchReducer"

const rootReducer = combineReducers({
  auth: authReducer,
  rentedCar: rentedCarReducer,
  show: showReducer,
  cars: carsReducer,
  search: searchReducer,
})

export default rootReducer

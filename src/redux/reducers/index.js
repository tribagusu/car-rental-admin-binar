import { combineReducers } from "redux"
import authReducer from "./authReducer"
import rentedCarReducer from "./rentedCarReducer"
import showReducer from "./showReducer"
import carsReducer from "./carsReducer"

const rootReducer = combineReducers({
  auth: authReducer,
  rentedCar: rentedCarReducer,
  show: showReducer,
  cars: carsReducer,
})

export default rootReducer

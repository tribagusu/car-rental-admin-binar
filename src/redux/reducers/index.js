import { combineReducers } from "redux"
import authReducer from "./authReducer"
import rentedCarReducer from "./rentedCarReducer"
import showReducer from "./showReducer"

const rootReducer = combineReducers({
  auth: authReducer,
  rentedCar: rentedCarReducer,
  show: showReducer,
})

export default rootReducer

import { combineReducers } from "redux"
import authReducer from "./authReducer"
import rentedCarReducer from "./rentedCarReducer"

const rootReducer = combineReducers({
  auth: authReducer,
  rentedCar: rentedCarReducer,
})

export default rootReducer

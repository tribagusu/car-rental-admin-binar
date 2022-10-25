import { combineReducers } from "redux"
import authReducer from "./authReducer"
import carsReducer from "./carsReducer"
import dataOrderReducer from "./dataOrderReducer"

const rootReducer = combineReducers({
  auth: authReducer,
  dataOrder: dataOrderReducer,
  cars: carsReducer,
})

export default rootReducer

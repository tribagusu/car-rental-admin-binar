import { combineReducers } from "redux"
import authReducer from "./authReducer"
import showReducer from "./showReducer"
import carsReducer from "./carsReducer"
import searchReducer from "./searchReducer"
import dataOrderReducer from "./dataOrderReducer"

const rootReducer = combineReducers({
  auth: authReducer,
  dataOrder: dataOrderReducer,
  show: showReducer,
  cars: carsReducer,
  search: searchReducer,
})

export default rootReducer

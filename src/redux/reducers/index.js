import { combineReducers } from "redux"
import authReducer from "./authReducer"
import showReducer from "./showReducer"
import carsReducer from "./carsReducer"
import searchReducer from "./searchReducer"
import monthlyOrderReducer from "./monthlyOrderReducer"
import dailyOrderReducer from "./dailyOrderReducer"

const rootReducer = combineReducers({
  auth: authReducer,
  monthlyOrder: monthlyOrderReducer,
  dailyOrder: dailyOrderReducer,
  show: showReducer,
  cars: carsReducer,
  search: searchReducer,
})

export default rootReducer

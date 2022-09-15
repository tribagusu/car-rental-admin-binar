import TYPES from "../types"
import axios from "axios"
import moment from "moment/moment"

const url = "https://bootcamp-rent-car.herokuapp.com/admin/order"

export const handleRentedDaily = () => {
  return (dispatch) => {
    axios
      .get(url)
      .then((res) => {
        dispatch({
          type: TYPES.GET_RENTED_CAR_DAY,
          payload: res.data
            .map((data) => moment(data.start_rent_at).format("D MMM"))
            .sort(),
        })
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}

export const handleRentedMonthly = () => {
  return (dispatch) => {
    axios
      .get(url)
      .then((res) => {
        dispatch({
          type: TYPES.GET_RENTED_CAR_MONTH,
          payload: res.data
            .map((data) => moment(data.start_rent_at).format("MMM [-] YYYY"))
            .sort(),
        })
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}

export const setTheMonth = (month) => {
  return {
    type: TYPES.THE_MONTH,
    payload: month,
  }
}

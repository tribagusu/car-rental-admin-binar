import axios from "axios"
import TYPES from "../types"

export const handleCars = () => (dispatch) => {
  axios
    .get("https://bootcamp-rent-car.herokuapp.com/admin/car")
    .then((res) => {
      dispatch({
        type: TYPES.GET_CARS,
        payload: res.data,
      })
    })
    .catch((err) => console.log(err.message))
}

export const handleCar = (id) => (dispatch) => {
  axios
    .get(`https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`)
    .then((res) => {
      dispatch({
        type: TYPES.GET_CAR,
        payload: res.data,
      })
    })
    .catch((err) => console.log(err.message))
}

export const handleOrders = () => (dispatch) => {
  axios
    .get("https://bootcamp-rent-car.herokuapp.com/admin/order")
    .then((res) => {
      dispatch({
        type: TYPES.GET_ORDERS,
        payload: res.data,
      })
    })
    .catch((err) => console.log(err.message))
}

export const handleCarSearched = (query) => (dispatch) => {
  axios
    .get("https://bootcamp-rent-car.herokuapp.com/admin/car")
    .then((res) => {
      const keys = ["name", "category"]
      const data = res.data.filter((item) =>
        keys.some((key) => item[key].toLowerCase().includes(query))
      )
      console.log(data)
      dispatch({
        type: TYPES.GET_CAR_SEARCHED,
        payload: data,
      })
    })
    .catch((err) => console.log(err.message))
}

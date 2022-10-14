import axios from "axios"
import TYPES from "../types"
import access_token from "../../hooks/accessToken"

export const handleCars = () => (dispatch) => {
  axios
    .get("https://bootcamp-rent-cars.herokuapp.com/admin/v2/car", {
      headers: { access_token },
    })
    .then((res) => {
      // console.log(res.data.cars)
      dispatch({
        type: TYPES.GET_CARS,
        payload: res.data.cars,
      })
    })
    .catch((err) => console.log(err.message))
}

export const handleCar = (id) => (dispatch) => {
  axios
    .get(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`, {
      headers: { access_token },
    })
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
    .get(
      "https://bootcamp-rent-cars.herokuapp.com/admin/v2/order?sort=created_at%3Adesc&page=1&pageSize=10",
      {
        headers: { access_token },
      }
    )
    .then((res) => {
      // console.log(res)
      dispatch({
        type: TYPES.GET_ORDERS,
        payload: res.data.orders,
      })
    })
    .catch((err) => console.log(err.message))
}

export const handleCarSearched = (query) => (dispatch) => {
  axios
    .get("https://bootcamp-rent-car.herokuapp.com/admin/v2/car")
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

import axios from "axios"
import TYPES from "../types"
import access_token from "../../hooks/accessToken"

export const handleCars = (page) => (dispatch) => {
  axios
    .get(
      `https://bootcamp-rent-cars.herokuapp.com/admin/v2/car?page=${page}&pageSize=9`,
      {
        headers: { access_token },
      }
    )
    .then((res) => {
      console.log(res.data)
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

export const handleOrders = (page, rowsPerPage) => (dispatch) => {
  axios
    .get(
      `https://bootcamp-rent-cars.herokuapp.com/admin/v2/order?sort=created_at%3Adesc&page=${
        page + 1
      }&pageSize=${rowsPerPage}`,
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

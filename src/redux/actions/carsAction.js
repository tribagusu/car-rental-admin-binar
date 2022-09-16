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

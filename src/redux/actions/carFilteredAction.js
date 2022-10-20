import axios from "axios"
import TYPES from "../types"
import access_token from "../../hooks/accessToken"

export const handleCarFiltered = (category, page) => (dispatch) => {
  axios
    .get(
      `https://bootcamp-rent-cars.herokuapp.com/admin/v2/car?category=${category}&page=${page}&pageSize=9`,
      {
        headers: {
          access_token,
        },
      }
    )
    .then((res) => {
      dispatch({
        type: TYPES.GET_CAR_FILTERED,
        payload: res.data.cars,
      })
    })
    .catch((err) => console.log(err.message))
}

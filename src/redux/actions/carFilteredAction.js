import axios from "axios"
import TYPES from "../types"

export const handleCarFiltered = (value) => (dispatch) => {
  axios
    .get("https://bootcamp-rent-car.herokuapp.com/admin/car")
    .then((res) => {
      const data = res.data
      const dataFiltered = data
        .map((data) => data)
        .filter(
          (data) => data.category === value.cat1 || data.category === value.cat2
        )

      console.log(dataFiltered)

      dispatch({
        type: TYPES.GET_CAR_FILTERED,
        payload: dataFiltered,
      })
    })
    .catch((err) => console.log(err.message))
}

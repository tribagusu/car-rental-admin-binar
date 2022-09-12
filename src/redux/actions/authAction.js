import axios from "axios"
import TYPES from "../types"

export const handleLogin = (payload) => {
  return (dispatch) => {
    axios
      .post("https://bootcamp-rent-car.herokuapp.com/admin/auth/login", payload)
      .then((res) => {
        console.log(res)
        localStorage.setItem("token", res.data.access_token)
        dispatch({
          type: TYPES.POST_LOGIN,
          payload: res.data.access_token,
        })
      })
      .catch((err) => console.log(err.message))
  }
}

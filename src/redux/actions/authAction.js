import axios from "axios"
import TYPES from "../types"
import swal from "sweetalert"

export const handleLogin = (payload, setErrMsg, setIsLoggedIn) => {
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
        if (res.data.access_token) {
          swal({
            title: "Welcome!",
            text: "Logged in successfully",
            icon: "success",
            timer: 1500,
          })
          setIsLoggedIn(true)
        }
      })
      .catch((err) => {
        console.log(err)
        if (err.response?.status === 404) {
          setErrMsg(true)
        } else if (err.response?.status === 400) {
          setErrMsg(true)
        } else {
          setErrMsg("Login Failed")
        }
      })
  }
}

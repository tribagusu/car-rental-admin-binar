import axios from "axios"

export const postAddCar = (payload) => {
  axios
    .post("https://bootcamp-rent-car.herokuapp.com/admin/car", payload)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => console.log(err.message))
}

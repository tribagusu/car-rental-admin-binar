import axios from "axios"
import swal from "sweetalert"

export const postAddCar = (payload, navigate) => {
  axios
    .post("https://bootcamp-rent-car.herokuapp.com/admin/car", payload)
    .then((res) => {
      console.log(res)
      if (res.status === 201) {
        swal({
          title: "Saved!",
          text: "Data Saved successfully",
          icon: "success",
          timer: 1500,
        })
        navigate(-1)
      }
    })
    .catch((err) => console.log(err.message))
}

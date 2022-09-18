import axios from "axios"
import swal from "sweetalert"

export const postAddCar = (payload, navigate) => {
  axios
    .post("https://bootcamp-rent-car.herokuapp.com/admin/car", payload)
    .then((res) => {
      console.log(res.status)
      if (res.status === 201) {
        swal({
          title: "Saved!",
          text: "Berhasil Menambah Data",
          icon: "success",
          timer: 2000,
        })
        navigate(-1)
      }
    })
    .catch((err) => console.log(err.message))
}

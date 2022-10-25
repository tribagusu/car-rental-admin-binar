import axios from "axios"
import swal from "sweetalert"
import access_token from "../../../hooks/accessToken"

export const postAddCar = (data, navigate) => {
  axios
    .post("https://bootcamp-rent-cars.herokuapp.com/admin/car", data, {
      headers: {
        access_token,
        "content-type": "multipart/form-data",
      },
    })
    .then((res) => {
      if (res.status === 201) {
        swal({
          title: "Saved!",
          text: "Berhasil Menambah Data",
          icon: "success",
          timer: 2000,
        })
        navigate("/cars")
      }
    })
    .catch((err) => console.log(err.message))
}

import axios from "axios"
import swal from "sweetalert"

export const postAddCar = (data, navigate) => {
  axios
    .post("https://bootcamp-rent-car.herokuapp.com/admin/car", data, {
      headers: {
        "content-type": "multipart/form-data",
      },
    })
    .then((res) => {
      console.log(res)
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

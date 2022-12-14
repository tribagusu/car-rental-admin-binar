import axios from "axios"
import swal from "sweetalert"
import access_token from "../../../hooks/accessToken"

export const putEditCar = (data, navigate, id) => {
  axios
    .put(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`, data, {
      headers: { access_token },
    })
    .then((res) => {
      if (res.status === 200) {
        swal({
          title: "Saved!",
          text: "Berhasil Mengubah Data",
          icon: "success",
          timer: 2000,
        })
        navigate(-1)
      }
    })
    .catch((err) => console.log(err.message))
}

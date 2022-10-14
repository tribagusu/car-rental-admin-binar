import axios from "axios"
import swal from "sweetalert"
import access_token from "../../../hooks/accessToken"

export const putEditCar = (data, navigate, id) => {
  axios
    .put(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`, {
      headers: { access_token },
      Body: data,
    })
    .then((res) => {
      console.log(res.status)
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

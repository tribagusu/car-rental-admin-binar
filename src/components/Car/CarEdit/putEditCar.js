import axios from "axios"
import swal from "sweetalert"

export const putEditCar = (payload, navigate, id) => {
  axios
    .put(`https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`, payload)
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

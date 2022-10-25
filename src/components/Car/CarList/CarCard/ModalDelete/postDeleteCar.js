import axios from "axios"
import swal from "sweetalert"
import access_token from "../../../../../hooks/accessToken"

export const postDeleteCar = (id, handleModal, navigate) => {
  axios
    .delete(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`, {
      headers: { access_token },
    })
    .then((res) => {
      if (res.status === 200) {
        swal({
          title: "Deleted!",
          text: "Berhasil Menghapus Data",
          icon: "success",
          timer: 2000,
        })
        navigate("/cars")
        handleModal()
      }
    })
    .catch((err) => console.log(err.message))
}

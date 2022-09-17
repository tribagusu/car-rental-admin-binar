import axios from "axios"
import swal from "sweetalert"

export const putEditCar = (payload, navigate, id) => {
  axios
    .put(`https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`, payload)
    .then((res) => {
      console.log(res)
      if (res.status === 200) {
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

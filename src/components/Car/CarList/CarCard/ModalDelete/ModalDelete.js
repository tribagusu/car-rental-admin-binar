import axios from "axios"
import swal from "sweetalert"
import { useNavigate } from "react-router-dom"
// asset
import modalImg from "../../../../../assets/modal-img.png"
import access_token from "../../../../../hooks/accessToken"

const ModalDelete = (props) => {
  const { handleModal, carId } = props
  const navigate = useNavigate()

  const handleDelete = (id) => {
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

  return (
    <div className="modal-delete__backdrop df-center">
      <div className="modal df-center">
        <div className="modal-content df-center">
          <img src={modalImg} alt="car" />
          <h3>Menghapus Data Mobil</h3>
          <p>
            Setelah dihapus, data mobil tidak dapat dikembalikan, Yakin ingin
            menghapus?
          </p>
          <div className="modal-button">
            <button onClick={() => handleDelete(carId)} className="btn-primary">
              Ya
            </button>
            <button onClick={handleModal} className="btn-outlined-primary">
              Tidak
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalDelete

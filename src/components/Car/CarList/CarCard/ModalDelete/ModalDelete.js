import { useNavigate } from "react-router-dom"
// func
import { postDeleteCar } from "./postDeleteCar"
// asset
import modalImg from "../../../../../assets/modal-img.png"

const ModalDelete = ({ handleModal, carId }) => {
  const navigate = useNavigate()

  const handleDelete = () => postDeleteCar(carId, handleModal, navigate)

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
            <button onClick={handleDelete} className="btn-primary">
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

import { useEffect } from "react"
import axios from "axios"
import swal from "sweetalert"
import { useDispatch } from "react-redux"

// asset
import modalImg from "../../../../../assets/modal-img.png"

// func
import { handleCars } from "../../../../../redux/actions/carsAction"

const ModalDelete = (props) => {
  const { handleModal, carId } = props
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    axios
      .delete(`https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`)
      .then((res) => {
        console.log(res.status)
        if (res.status === 200) {
          swal({
            title: "Deleted!",
            text: "Berhasil Menghapus Data",
            icon: "success",
            timer: 2000,
          })
          handleModal()
        }
      })
      .catch((err) => console.log(err.message))
  }

  useEffect(() => {
    dispatch(handleCars())
  }, [handleDelete])

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

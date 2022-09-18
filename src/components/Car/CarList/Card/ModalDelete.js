import React from "react"

// asset
import modalImg from "../../../../assets/modal-img.png"

const ModalDelete = () => {
  return (
    <div className="modal-delete__backdrop df-center">
      <div className="modal-card df-center">
        <div className="modal-content df-center">
          <img src={modalImg} alt="car" />
          <h3>Menghapus Data Mobil</h3>
          <p>
            Setelah dihapus, data mobil tidak dapat dikembalikan, Yakin ingin
            menghapus?
          </p>
          <div className="modal-button">
            <button className="btn-primary">Ya</button>
            <button className="btn-outlined-primary">Tidak</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalDelete

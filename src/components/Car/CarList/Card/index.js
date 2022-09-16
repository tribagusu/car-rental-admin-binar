import React from "react"

const CarCard = () => {
  return (
    <section className="car-card-container">
      <div className="car-card">
        <div className="card-body">
          <div className="card-image"></div>
          <p>Nama/Tipe Mobil</p>
          <h4>Rp 500.000 / hari</h4>
          <p>6 - 8 people</p>
          <p>updated time</p>
          <div className="card-button">
            <button className="button-delete btn-outlined-danger">
              Delete
            </button>
            <button className="button-edit btn">Edit</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CarCard

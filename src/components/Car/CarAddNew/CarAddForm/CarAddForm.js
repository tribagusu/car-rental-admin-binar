import React from "react"

const CarAddForm = () => {
  return (
    <section className="car-add-form__container">
      <form>
        <div>
          <label>Name/Tipe Mobil</label>
          <input type="text" placeholder="Input Nama/Tipe Mobil" />
        </div>
        <div>
          <label>Harga</label>
          <input type="number" min="0" placeholder="Input Harga Sewa Mobil" />
        </div>
        <div className="form-upload">
          <label>Foto</label>
          <input type="file" />
        </div>
        <div>
          <label>Kategori</label>
          <select name="" id="">
            <option selected hidden disabled>
              Pilih Kategori Mobil
            </option>
            <option value="">2 - 4 Orang</option>
            <option value="">4 - 6 Orang</option>
            <option value="">6 - 8 Orang</option>
          </select>
        </div>
        <div>
          <p>Created at</p>
          <small>-</small>
        </div>
        <div>
          <p>Updated at</p>
          <small>-</small>
        </div>
      </form>
    </section>
  )
}

export default CarAddForm

import React from "react"

const CarAddForm = (props) => {
  const {
    carName,
    carPrice,
    carCategory,
    setCarName,
    setCarPrice,
    onImageUpload,
    setCarCategory,
  } = props

  return (
    <section className="car-add-form__container">
      <form>
        <div>
          <label>
            Name/Tipe Mobil<span>*</span>{" "}
          </label>
          <input
            onChange={(e) => setCarName(e.target.value)}
            value={carName}
            type="text"
            placeholder="Input Nama/Tipe Mobil"
            required
          />
        </div>
        <div>
          <label>
            Harga<span>*</span>
          </label>
          <input
            onChange={(e) => setCarPrice(e.target.value)}
            value={carPrice}
            type="number"
            min="0"
            placeholder="Input Harga Sewa Mobil Per Hari"
            required
          />
        </div>
        <div className="form-upload">
          <label>
            Foto<span>*</span>
          </label>
          <input onChange={onImageUpload} type="file" required />
        </div>
        <div>
          <label>
            Kategori<span>*</span>
          </label>
          <select
            onChange={(e) => setCarCategory(e.target.value)}
            value={carCategory}
            required
          >
            <option selected hidden disabled>
              Pilih Kategori Mobil
            </option>
            <option value="small">2 - 4 Orang</option>
            <option value="medium">4 - 6 Orang</option>
            <option value="large">6 - 8 Orang</option>
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

import { useSelector } from "react-redux"

const CarEditForm = (props) => {
  const { car } = useSelector((state) => state.cars)

  const {
    setCarName,
    setCarPrice,
    setCarImage,
    setCarCategory,
    onImageUpload,
  } = props

  return (
    <section className="car-edit-form__container">
      <form>
        <div>
          <label>
            Name/Tipe Mobil<span>*</span>{" "}
          </label>
          <input
            onChange={(e) => setCarName(e.target.value)}
            type="text"
            placeholder={car.name}
            required
          />
        </div>
        <div>
          <label>
            Harga<span>*</span>
          </label>
          <input
            onChange={(e) => setCarPrice(e.target.value)}
            type="number"
            min="0"
            required
            placeholder={car.price}
          />
        </div>
        <div className="form-upload">
          <label>Foto</label>
          <input onChange={onImageUpload} type="file" />
        </div>
        <div>
          <label>
            Kategori<span>*</span>
          </label>
          <select onChange={(e) => setCarCategory(e.target.value)} required>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
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

export default CarEditForm

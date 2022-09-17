import { useSelector } from "react-redux"

const CarEditForm = (props) => {
  const { car } = useSelector((state) => state.cars)

  const { setCarName, setCarPrice, setCarImage, setCarCategory } = props

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
          <label>
            Foto<span>*</span>
          </label>
          <input
            onChange={(e) => setCarImage(e.target.value)}
            type="file"
            required
          />
        </div>
        <div>
          <label>
            Kategori<span>*</span>
          </label>
          <select onChange={(e) => setCarCategory(e.target.value)} required>
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

export default CarEditForm

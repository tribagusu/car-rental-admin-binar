import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

// fetch
import { putEditCar } from "../putEditCar"

const CarEditButton = (props) => {
  const { carName, carPrice, carImage, carCategory } = props

  //   func
  const navigate = useNavigate()
  const param = useParams()
  const handleGoBack = () => {
    navigate(-1)
  }
  const handleEditCar = () => {
    const id = param.id
    const data = new FormData()
    data.append("name", carName)
    data.append("category", carCategory)
    data.append("price", carPrice)
    data.append("image", carImage)
    putEditCar(data, navigate, id)
  }

  return (
    <div className="car-edit-button">
      <button onClick={handleGoBack} className="btn-outlined-primary">
        Cancel
      </button>
      <button onClick={handleEditCar} className="btn-primary">
        Save
      </button>
    </div>
  )
}

export default CarEditButton

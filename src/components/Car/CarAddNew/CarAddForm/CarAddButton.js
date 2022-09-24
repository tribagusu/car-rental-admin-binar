import { useNavigate } from "react-router-dom"

// func
import { postAddCar } from "../postAddCar"

const CarAddButton = (props) => {
  const { carName, carPrice, carImage, carCategory } = props
  const navigate = useNavigate()

  // func
  const handleGoBack = () => {
    navigate(-1)
  }

  const handleAddCar = () => {
    const data = new FormData()
    data.append("name", carName)
    data.append("category", carCategory)
    data.append("price", carPrice)
    data.append("image", carImage)
    postAddCar(data, navigate)
  }

  return (
    <div className="car-add-button">
      <button onClick={handleGoBack} className="btn-outlined-primary">
        Cancel
      </button>
      <button onClick={handleAddCar} className="btn-primary">
        Save
      </button>
    </div>
  )
}

export default CarAddButton

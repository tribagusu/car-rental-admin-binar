import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

// func
import { postAddCar } from "../postAddCar"
import { handleCars } from "../../../../redux/actions/carsAction"

const CarAddButton = (props) => {
  const { carName, carPrice, carImage, carCategory } = props
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // func
  const handleGoBack = () => {
    navigate(-1)
  }

  const handleAddCar = () => {
    const payload = {
      name: carName,
      category: carCategory,
      price: carPrice,
      image: carImage,
    }
    postAddCar(payload, navigate)
  }

  useEffect(() => {
    dispatch(handleCars())
  }, [handleAddCar])

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

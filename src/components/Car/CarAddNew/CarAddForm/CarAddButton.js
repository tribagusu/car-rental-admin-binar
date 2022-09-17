import React from "react"

// func
import { postAddCar } from "../postAddCar"

const CarAddButton = (props) => {
  const { carName, carPrice, carImage, carCategory } = props

  const handleAddCar = () => {
    const payload = {
      carName,
      carPrice,
      carImage,
      carCategory,
    }
    postAddCar(payload)
  }

  return <div>CarAddButton</div>
}

export default CarAddButton

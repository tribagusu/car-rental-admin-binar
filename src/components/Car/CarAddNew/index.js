import React, { useState } from "react"

// comp
import CarAddButton from "./CarAddForm/CarAddButton"
import CarAddForm from "./CarAddForm/CarAddForm"
import CarAddHeader from "./CarAddHeader"

const CarAddNew = () => {
  const [carName, setCarName] = useState("")
  const [carPrice, setCarPrice] = useState(0)
  const [carImage, setCarImage] = useState("")
  const [carCategory, setCarCategory] = useState("")

  const props = {
    setCarName,
    setCarPrice,
    setCarImage,
    setCarCategory,
    carName,
    carPrice,
    carImage,
    carCategory,
  }

  //   console.log(carName, carPrice, carImage, carCategory)

  return (
    <section className="car-add-new">
      <main className="car-add-new__container">
        <CarAddHeader />
        <CarAddForm {...props} />
        <CarAddButton {...props} />
      </main>
    </section>
  )
}

export default CarAddNew

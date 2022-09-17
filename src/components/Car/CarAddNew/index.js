import React, { useState } from "react"

// comp
import CarAddButton from "./CarAddForm/CarAddButton"
import CarAddForm from "./CarAddForm/CarAddForm"
import CarAddHeader from "./CarAddHeader"

const CarAddNew = () => {
  const [carName, setCarName] = useState("")
  const [carPrice, setCarPrice] = useState("")
  const [carImage, setCarImage] = useState("")
  const [carCategory, setCarCategory] = useState(undefined)

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
        <div className="car-add-new__form">
          <CarAddForm {...props} />
          <CarAddButton {...props} />
        </div>
      </main>
    </section>
  )
}

export default CarAddNew

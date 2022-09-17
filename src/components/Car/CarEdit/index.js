import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"

// comp
import CarEditButton from "./CarEditForm/CarEditButton"
import CarEditForm from "./CarEditForm/CarEditForm"
import CarEditHeader from "./CarEditHeader"

// func
import { handleCar } from "../../../redux/actions/carsAction"

const CarEdit = () => {
  // state
  const [carName, setCarName] = useState("")
  const [carPrice, setCarPrice] = useState("")
  const [carImage, setCarImage] = useState("")
  const [carCategory, setCarCategory] = useState("")

  // hook
  const dispatch = useDispatch()
  const param = useParams()

  useEffect(() => {
    const id = param.id
    dispatch(handleCar(id))
  }, [])

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

  return (
    <section className="car-edit">
      <main className="car-edit__container">
        <CarEditHeader />
        <div className="car-edit__form">
          <CarEditForm {...props} />
          <CarEditButton {...props} />
        </div>
      </main>
    </section>
  )
}

export default CarEdit

import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { handleCars } from "../../redux/actions/carsAction"

// comp
import CarCard from "./CarList/CarCard"
import ListHeader from "./CarList/ListHeader"

const CarList = () => {
  const { car } = useSelector((state) => state.cars)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(handleCars())
  }, [car])

  return (
    <section className="car-list">
      <main className="car-list-container">
        <ListHeader />
        <CarCard />
      </main>
    </section>
  )
}

export default CarList

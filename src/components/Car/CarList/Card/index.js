import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { handleCars } from "../../../../redux/actions/carsAction"
import moment from "moment/moment"
import { formatCurrency } from "../../../../utils/formatCurrency"

const CarCard = () => {
  const { cars } = useSelector((state) => state.cars)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(handleCars())
  }, [])

  const car = cars.map((car) => car)
  const timeUpdated = moment(car.updatedAt).format("MMM D YYYY, hh:mm")
  //   const carPrice = formatCurrency(car.price)

  return (
    <section className="car-card-container">
      {cars.map((car) => (
        <div className="car-card">
          <div className="card-body">
            <img src={car.image} alt="car" />
            <p>{car.name}</p>
            <h4>{`${formatCurrency(car.price)} / hari`}</h4>
            <p>{car.category}</p>
            <small>Updated at {timeUpdated}</small>
            <div className="card-button">
              <button className="button-delete btn-outlined-danger">
                Delete
              </button>
              <button className="button-edit btn">Edit</button>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default CarCard

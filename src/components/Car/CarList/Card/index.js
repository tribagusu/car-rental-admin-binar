import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

// func
import { handleCars } from "../../../../redux/actions/carsAction"
import { formatCurrency } from "../../../../utils/formatCurrency"

// library
import moment from "moment/moment"
import {
  UilUsersAlt,
  UilClock,
  UilTrash,
  UilEdit,
} from "@iconscout/react-unicons"

// asset
import noImage from "../../../../assets/no-image.png"

const CarCard = () => {
  const { cars } = useSelector((state) => state.cars)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(handleCars())
  }, [])

  const car = cars.map((car) => car)
  const timeUpdated = moment(car.updatedAt).format("MMM D YYYY, hh:mm")

  return (
    <section className="car-card-container">
      {cars.map((car) => (
        <div className="car-card">
          <>
            <div className="card-body">
              <div className="card-image">
                <img src={car.image ? car.image : noImage} alt="car" />
              </div>
              <div className="card-content">
                <p>{car.name}</p>
                <h4>{`${formatCurrency(car.price)} / hari`}</h4>
                <div className="car-category">
                  <UilUsersAlt />
                  <p>{car.category}</p>
                </div>
                <div className="car-updated">
                  <UilClock />
                  <small>Updated at {timeUpdated}</small>
                </div>
                <div className="card-button">
                  <button className="button-delete btn-outlined-danger">
                    <UilTrash />
                    <p>Delete</p>
                  </button>
                  <button className="button-edit btn">
                    <UilEdit />
                    <p>Edit</p>
                  </button>
                </div>
              </div>
            </div>
          </>
        </div>
      ))}
    </section>
  )
}

export default CarCard

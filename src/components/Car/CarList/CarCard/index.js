import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"

// func
import { handleCars } from "../../../../redux/actions/carsAction"
import { handleCarFiltered } from "../../../../redux/actions/carFilteredAction"
import { formatCurrency } from "../../../../utils/formatCurrency"

// library
import moment from "moment/moment"
import { UilUsersAlt, UilClock } from "@iconscout/react-unicons"

// asset
import noImage from "../../../../assets/no-image.png"

// comp
import ButtonDelete from "./ButtonDelete"
import ButtonEdit from "./ButtonEdit"

const CarCard = () => {
  const { cars } = useSelector((state) => state.cars)
  // const { searchTerm } = useSelector((state) => state.search)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(handleCars())
  }, [])

  // get time updated
  const car = cars.map((car) => car)
  const timeUpdated = moment(car.updatedAt).format("MMM D YYYY, hh:mm")

  // const data = carFiltered.length ? carFiltered : cars

  return (
    <div className="car-card__container">
      {!!cars.length ? (
        cars.map((car) => (
          <div key={car.id} className="car-card">
            <>
              <div className="car-card__body">
                <div className="car-card__image">
                  <img src={car.image ? car.image : noImage} alt="car" />
                </div>
                <div className="car-card__content">
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
                  <div className="car-card__button">
                    <ButtonDelete carId={car.id} />
                    <Link to={`edit-car/${car.id}`}>
                      <ButtonEdit />
                    </Link>
                  </div>
                </div>
              </div>
            </>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default CarCard

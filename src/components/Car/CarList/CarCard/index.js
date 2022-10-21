import React from "react"
import { Link } from "react-router-dom"
// func
import { formatCurrency } from "../../../../utils/formatCurrency"
// library
import moment from "moment/moment"
import { UilUsersAlt, UilClock } from "@iconscout/react-unicons"
// asset
import noImage from "../../../../assets/no-image.png"
// comp
import ButtonDelete from "./ButtonDelete"
import ButtonEdit from "./ButtonEdit"
import SkeletonCard from "../../../Skeletons/SkeletonCard"

const CarCard = ({ data, isLoading, isFetching }) => {
  return (
    <div className="car-card__container">
      {data?.cars.map((car) => (
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
                  <small>
                    Updated at{" "}
                    {moment(car.updatedAt).format("MMM D YYYY, hh:mm")}
                  </small>
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
      ))}
      {isLoading && <SkeletonCard />}
      {isFetching && !data && <div>Loading data..</div>}
    </div>
  )
}

export default CarCard

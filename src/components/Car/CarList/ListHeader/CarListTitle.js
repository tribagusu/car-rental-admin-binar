import { Link } from "react-router-dom"

// library
import { UilPlus } from "@iconscout/react-unicons"

const CarListTitle = () => {
  return (
    <section className="car-list-title">
      <div className="car-list-title-container">
        <h2>List Car</h2>
        <Link to="add-car">
          <button className="btn-primary ">
            <UilPlus />
            <p>Add New Car</p>
          </button>
        </Link>
      </div>
    </section>
  )
}

export default CarListTitle

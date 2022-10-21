import React, { useState } from "react"
// comp
import CarFilterAll from "./CarFilterButton/CarFilterAll"
import CarFilterLarge from "./CarFilterButton/CarFilterLarge"
import CarFilterMedium from "./CarFilterButton/CarFilterMedium"
import CarFilterSmall from "./CarFilterButton/CarFilterSmall"
import CarPagination from "../CarPagination"

const CarFilter = ({
  page,
  setPage,
  category,
  setCategory,
  data,
  isLoading,
  isPreviousData,
}) => {
  const [showAll, setShowAll] = useState(true)
  const [showSmall, setShowSmall] = useState(false)
  const [showMedium, setShowMedium] = useState(false)
  const [showLarge, setShowLarge] = useState(false)

  //# props
  const props = {
    showAll,
    showSmall,
    showMedium,
    showLarge,
    setShowAll,
    setShowSmall,
    setShowMedium,
    setShowLarge,
    page,
    setPage,
    category,
    setCategory,
    data,
    isLoading,
    isPreviousData,
  }

  return (
    <section className="car-filter-container">
      <div className="car-filter">
        <CarFilterAll {...props} />
        <CarFilterSmall {...props} />
        <CarFilterMedium {...props} />
        <CarFilterLarge {...props} />
      </div>
      <div className="car-pagination">
        <CarPagination {...props} />
      </div>
    </section>
  )
}

export default CarFilter

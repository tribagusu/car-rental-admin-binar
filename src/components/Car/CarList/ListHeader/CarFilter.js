import React, { useState } from "react"
import CarFilterAll from "./CarFilterButton/CarFilterAll"
import CarFilterLarge from "./CarFilterButton/CarFilterLarge"
import CarFilterMedium from "./CarFilterButton/CarFilterMedium"
import CarFilterSmall from "./CarFilterButton/CarFilterSmall"

const CarFilter = () => {
  const [showAll, setShowAll] = useState(true)
  const [showSmall, setShowSmall] = useState(false)
  const [showMedium, setShowMedium] = useState(false)
  const [showLarge, setShowLarge] = useState(false)

  const props = {
    showAll,
    showSmall,
    showMedium,
    showLarge,
    setShowAll,
    setShowSmall,
    setShowMedium,
    setShowLarge,
  }

  return (
    <section className="car-filter">
      <CarFilterAll {...props} />
      <CarFilterSmall {...props} />
      <CarFilterMedium {...props} />
      <CarFilterLarge {...props} />
    </section>
  )
}

export default CarFilter

import React from "react"

const CarFilterMedium = (props) => {
  const {
    showMedium,
    setShowAll,
    setShowSmall,
    setShowMedium,
    setShowLarge,
    setCategory,
  } = props

  const handleShowMedium = () => {
    setShowMedium(true)
    setShowLarge(false)
    setShowAll(false)
    setShowSmall(false)
    setCategory("medium")
  }

  return (
    <button
      className={showMedium ? "btn-active" : "btn-passive"}
      onClick={handleShowMedium}
    >
      Medium
    </button>
  )
}

export default CarFilterMedium

import React from "react"

const CarFilterLarge = (props) => {
  const {
    showLarge,
    setShowAll,
    setShowSmall,
    setShowMedium,
    setShowLarge,
    setCategory,
  } = props

  const handleShowLarge = () => {
    setShowLarge(true)
    setShowAll(false)
    setShowSmall(false)
    setShowMedium(false)
    setCategory("large")
  }

  return (
    <button
      className={showLarge ? "btn-active" : "btn-passive"}
      onClick={handleShowLarge}
    >
      Large
    </button>
  )
}

export default CarFilterLarge

import React from "react"

const CarFilterLarge = (props) => {
  const { showLarge, setShowAll, setShowSmall, setShowMedium, setShowLarge } =
    props

  const handleShowLarge = () => {
    setShowLarge(true)
    setShowAll(false)
    setShowSmall(false)
    setShowMedium(false)
  }

  return (
    <button
      className={showLarge ? "btn-active" : "btn-passive"}
      onClick={handleShowLarge}
    >
      6 - 8 people
    </button>
  )
}

export default CarFilterLarge

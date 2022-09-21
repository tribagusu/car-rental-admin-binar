import React from "react"

const CarFilterMedium = (props) => {
  const { showMedium, setShowAll, setShowSmall, setShowMedium, setShowLarge } =
    props

  const handleShowMedium = () => {
    setShowMedium(true)
    setShowLarge(false)
    setShowAll(false)
    setShowSmall(false)
  }

  return (
    <button
      className={showMedium ? "btn-active" : "btn-passive"}
      onClick={handleShowMedium}
    >
      4 - 6 people
    </button>
  )
}

export default CarFilterMedium

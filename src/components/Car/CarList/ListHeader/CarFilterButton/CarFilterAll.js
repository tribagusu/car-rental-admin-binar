import React from "react"

const CarFilterAll = (props) => {
  const { showAll, setShowAll, setShowSmall, setShowMedium, setShowLarge } =
    props

  const handleShowAll = () => {
    setShowAll(true)
    setShowSmall(false)
    setShowMedium(false)
    setShowLarge(false)
  }

  return (
    <button
      className={showAll ? "btn-active" : "btn-passive"}
      onClick={handleShowAll}
    >
      All
    </button>
  )
}

export default CarFilterAll

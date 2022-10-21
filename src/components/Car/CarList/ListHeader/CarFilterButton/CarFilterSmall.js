import React from "react"

const CarFilterSmall = (props) => {
  const {
    showSmall,
    setShowAll,
    setShowSmall,
    setShowMedium,
    setShowLarge,
    setCategory,
  } = props

  const handleShowSmall = () => {
    setShowSmall(true)
    setShowMedium(false)
    setShowLarge(false)
    setShowAll(false)
    setCategory("small")
  }

  return (
    <button
      className={showSmall ? "btn-active" : "btn-passive"}
      onClick={handleShowSmall}
    >
      Small
    </button>
  )
}

export default CarFilterSmall

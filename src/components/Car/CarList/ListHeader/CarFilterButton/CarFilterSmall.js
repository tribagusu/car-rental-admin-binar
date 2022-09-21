import React from "react"

const CarFilterSmall = (props) => {
  const { showSmall, setShowAll, setShowSmall, setShowMedium, setShowLarge } =
    props

  const handleShowSmall = () => {
    setShowSmall(true)
    setShowMedium(false)
    setShowLarge(false)
    setShowAll(false)
  }

  return (
    <button
      className={showSmall ? "btn-active" : "btn-passive"}
      onClick={handleShowSmall}
    >
      2 - 4 people
    </button>
  )
}

export default CarFilterSmall

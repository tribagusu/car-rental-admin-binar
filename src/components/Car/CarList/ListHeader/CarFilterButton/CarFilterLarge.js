const CarFilterLarge = (props) => {
  const { setCategory, buttonFilter, setButtonFilter } = props

  const handleShowLarge = () => {
    setCategory("large")
    setButtonFilter("large")
  }

  return (
    <button
      className={buttonFilter === "large" ? "btn-active" : "btn-passive"}
      onClick={handleShowLarge}
    >
      Large
    </button>
  )
}

export default CarFilterLarge

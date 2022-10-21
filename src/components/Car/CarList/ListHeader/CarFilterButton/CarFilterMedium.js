const CarFilterMedium = (props) => {
  const { setCategory, buttonFilter, setButtonFilter } = props

  const handleShowMedium = () => {
    setCategory("medium")
    setButtonFilter("medium")
  }

  return (
    <button
      className={buttonFilter === "medium" ? "btn-active" : "btn-passive"}
      onClick={handleShowMedium}
    >
      Medium
    </button>
  )
}

export default CarFilterMedium

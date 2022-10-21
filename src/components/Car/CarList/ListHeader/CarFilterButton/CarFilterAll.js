const CarFilterAll = (props) => {
  const { setCategory, buttonFilter, setButtonFilter } = props

  const handleShowAll = () => {
    setCategory("")
    setButtonFilter("all")
  }

  return (
    <button
      className={buttonFilter === "all" ? "btn-active" : "btn-passive"}
      onClick={handleShowAll}
    >
      All
    </button>
  )
}

export default CarFilterAll

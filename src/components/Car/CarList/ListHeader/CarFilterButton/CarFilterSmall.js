const CarFilterSmall = (props) => {
  const { setCategory, buttonFilter, setButtonFilter } = props

  const handleShowSmall = () => {
    setCategory("small")
    setButtonFilter("small")
  }

  return (
    <button
      className={buttonFilter === "small" ? "btn-active" : "btn-passive"}
      onClick={handleShowSmall}
    >
      Small
    </button>
  )
}

export default CarFilterSmall

import arrowIcon from "../../assets/arrow-icon.png"

const Breadcrumb = () => {
  return (
    <section className="breadcrumb">
      <div className="breadcrumb-container df-center">
        <p>Dashboard</p>
        <img src={arrowIcon} alt="arrow" />
        <small>Dashboard</small>
      </div>
    </section>
  )
}

export default Breadcrumb

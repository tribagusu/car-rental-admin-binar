import { Link } from "react-router-dom"

const Breadcrumb = () => {
  return (
    <section className="breadcrumb">
      <div className="breadcrumb-container df-center ">
        <p>Cars</p>
        <i className="uil uil-angle-right-b"></i>
        <div className="link">
          <Link to="#">List Car</Link>
        </div>
      </div>
    </section>
  )
}

export default Breadcrumb

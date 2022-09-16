import { Link } from "react-router-dom"

const Breadcrumb = () => {
  return (
    <section className="breadcrumb">
      <div className="breadcrumb-container df-center ">
        <p>Dashboard</p>
        <i class="uil uil-angle-right-b"></i>
        <div className="link">
          <Link to="#">Dashboard</Link>
        </div>
      </div>
    </section>
  )
}

export default Breadcrumb

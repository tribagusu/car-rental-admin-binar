import dashboardIcon from "../assets/home-icon.png"
import truckIcon from "../assets/truck-icon.png"

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo df-center">
        <span></span>
      </div>
      <div className="sidebar-menu ">
        <div className="menu-dashboard df-center bg-washout">
          <img src={dashboardIcon} alt="dashboard" />
          <h4>Dashboard</h4>
        </div>
        <div className="menu-cars df-center">
          <img src={truckIcon} alt="cars" />
          <h4>Cars</h4>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar

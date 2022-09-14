import dashboardIcon from "../../assets/home-icon.png"
import truckIcon from "../../assets/truck-icon.png"
import { NavLink } from "react-router-dom"
import { useState } from "react"

const Sidebar = (props) => {
  const { handleDsbr, handleCar } = props

  return (
    <aside className="sidebar">
      <div className="sidebar-logo df-center">
        <span></span>
      </div>
      <div className="sidebar-menu ">
        <NavLink onClick={handleDsbr} to={"/dashboard"}>
          <div className="menu-dashboard df-center">
            <img src={dashboardIcon} alt="dashboard" />
            <h4>Dashboard</h4>
          </div>
        </NavLink>
        <NavLink onClick={handleCar} to={"/cars"}>
          <div className="menu-cars df-center">
            <img src={truckIcon} alt="cars" />
            <h4>Cars</h4>
          </div>
        </NavLink>
      </div>
    </aside>
  )
}

export default Sidebar

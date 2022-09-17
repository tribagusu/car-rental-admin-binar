import { NavLink } from "react-router-dom"

// assets
import { UilEstate, UilTruck } from "@iconscout/react-unicons"

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo df-center">
        <span />
      </div>
      <div className="sidebar-menu ">
        <NavLink to={"/dashboard"}>
          <div className="menu-dashboard df-center">
            <UilEstate />
          </div>
        </NavLink>
        <NavLink to={"/cars"}>
          <div className="menu-cars df-center">
            <UilTruck />
          </div>
        </NavLink>
      </div>
    </aside>
  )
}

export default Sidebar

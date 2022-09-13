import React from "react"

const Navbar = ({ open }) => {
  return (
    <nav>
      {open && (
        <div className="nav-container">
          <div className="menu-title">
            <h4>dashboard</h4>
            <h4>cars</h4>
          </div>
          <div className="menu bg-secondary">
            <p>Dashboard</p>
            <p>List Car</p>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

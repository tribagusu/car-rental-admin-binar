import React from "react"

const Navbar = (props) => {
  const { open, car, dsbr } = props

  return (
    <nav>
      {open && (
        <div className="nav-container">
          <div className="menu-title">
            {dsbr && <h4>dashboard</h4>}
            {car && <h4>cars</h4>}
          </div>
          <div className="menu bg-secondary">
            {dsbr && <p>Dashboard</p>}
            {car && <p>List Car</p>}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

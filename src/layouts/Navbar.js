import menuIcon from "../assets/menu-icon.png"
import dropdownIcon from "../assets/dropdown-icon.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-menu df-center">
          <img src={menuIcon} alt="menu" />
        </div>
        <div className="nav-main df-center">
          <div className="nav-search df-center">
            <input type="text" />
            <button className="btn-outlined-primary">Search</button>
          </div>
          <div className="nav-user df-center ">
            <div className="user-logo df-center">
              <p>U</p>
            </div>
            <div className="user-name">
              <p>Unis Badri</p>
            </div>
            <div className="user-detail">
              <img src={dropdownIcon} alt="dropdown" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

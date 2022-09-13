import menuIcon from "../assets/menu-icon.png"
import dropdownIcon from "../assets/dropdown-icon.png"

const Header = () => {
  return (
    <header className="header p-0">
      <div className="header header-container">
        <div className="header-left df-center">
          <div className="header-logo"></div>
          <div className="menu-icon df-center">
            <img src={menuIcon} alt="menu" />
          </div>
        </div>
        <div className="header-main df-center">
          <div className="header-search df-center">
            <input type="text" placeholder="Search" />
            <button className="btn-outlined-primary">Search</button>
          </div>
          <div className="header-user df-center ">
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
    </header>
  )
}

export default Header

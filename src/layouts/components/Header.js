import dropdownIcon from "../../assets/dropdown-icon.png"
import { UilBars } from "@iconscout/react-unicons"

import { useDispatch, useSelector } from "react-redux"
import TYPES from "../../redux/types"

const Header = () => {
  const { show } = useSelector((state) => state.show)
  const dispatch = useDispatch()

  const handleShow = () => {
    dispatch({
      type: TYPES.SHOW,
      payload: !show,
    })
  }

  return (
    <header className="header p-0">
      <div className="header header-container">
        <div className="header-left df-center">
          <div className="header-logo"></div>
          <div onClick={handleShow} className="menu-icon df-center">
            <UilBars />
          </div>
        </div>
        <div className="header-main df-center">
          <div className="header-search df-center">
            <input type="search" placeholder="Search" />
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

import { useState, useCallback, useMemo } from "react"
import { useNavigate } from "react-router-dom"
// icons
import { UilBars, UilAngleDown } from "@iconscout/react-unicons"
// redux
import { useDispatch, useSelector } from "react-redux"
import TYPES from "../redux/types"

const Header = () => {
  const [showProfile, setShowProfile] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  // redux state
  const { showNav } = useSelector((state) => state.showNav)
  const dispatch = useDispatch()

  // show navigation
  const handleShowNav = () => {
    dispatch({
      type: TYPES.SHOW_NAV,
      payload: !showNav,
    })
  }

  // logout function
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }

  // search function
  const handleQuery = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleSearch = (e) => {
    if (searchQuery.length === 0) {
      setSearchQuery("")
    }
    e.preventDefault()
    dispatch({
      type: TYPES.SEARCH_QUERY,
      payload: searchQuery,
    })
  }

  return (
    <header className="header p-0">
      <div className="header header-container">
        <div className="header-left df-center">
          <div className="header-logo"></div>
          <div onClick={handleShowNav} className="menu-icon df-center">
            <UilBars />
          </div>
        </div>
        <div className="header-main df-center">
          <form onSubmit={handleSearch} className="header-search df-center">
            <input onChange={handleQuery} type="search" placeholder="Search" />
            <button className="btn-outlined-primary">Search</button>
          </form>
          <div className="header-user">
            <div
              onClick={() => setShowProfile(!showProfile)}
              className="user-profile df-center"
            >
              <div className="user-logo df-center">
                <p>A</p>
              </div>
              <UilAngleDown />
            </div>
            {showProfile && (
              <div className="user-detail">
                <small>Signed in as admin</small>
                <hr />
                <div onClick={handleLogout} className="user-logout">
                  <h5>Logout</h5>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

import { useState, useCallback, useMemo } from "react"
import { useNavigate } from "react-router-dom"
// icons
import { UilBars, UilAngleDown } from "@iconscout/react-unicons"
// redux
import { useDispatch, useSelector } from "react-redux"
import { handleCarSearched } from "../redux/actions/carsAction"
import TYPES from "../redux/types"

const Header = () => {
  const [showProfile, setShowProfile] = useState(false)
  const [query, setQuery] = useState("")

  // redux state
  const { showNav } = useSelector((state) => state.showNav)
  const { carSearched } = useSelector((state) => state.cars)
  const { searchQuery } = useSelector((state) => state.searchQuery)

  const dispatch = useDispatch()

  // search query function
  const handleQuery = (e) => {
    dispatch({
      type: TYPES.SEARCH_QUERY,
      payload: e.target.value,
    })
  }

  // show navigation
  const handleShowNav = () => {
    dispatch({
      type: TYPES.SHOW_NAV,
      payload: !showNav,
    })
  }

  // search function
  const handleSearch = () => {
    // dispatch(handleQuery())
    dispatch(handleCarSearched(query))
  }

  console.log(carSearched, searchQuery, query)

  // show profile detail
  const handleShowProfile = () => {
    setShowProfile(!showProfile)
  }

  // logout function
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/login")
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
          <div className="header-search df-center">
            <input
              // onChange={handleQuery}
              onChange={(e) => setQuery(e.target.value)}
              type="search"
              placeholder="Search"
            />
            <button onClick={handleSearch} className="btn-outlined-primary">
              Search
            </button>
          </div>
          <div className="header-user">
            <div onClick={handleShowProfile} className="user-profile df-center">
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

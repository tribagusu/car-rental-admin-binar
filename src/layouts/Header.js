import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { atom, useAtom } from "jotai"
// icons
import { UilBars, UilAngleDown } from "@iconscout/react-unicons"

// exports
export const searchQueryAtom = atom("")
export const showNavAtom = atom(true)

const Header = () => {
  const [showProfile, setShowProfile] = useState(false)
  const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom)
  const [showNav, setShowNav] = useAtom(showNavAtom)

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
          <div
            onClick={() => setShowNav(!showNav)}
            className="menu-icon df-center"
          >
            <UilBars />
          </div>
        </div>
        <div className="header-main df-center">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="header-search df-center"
          >
            <input
              onChange={(e) => setSearchQuery(e?.target?.value)}
              type="search"
              placeholder="Search"
            />
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

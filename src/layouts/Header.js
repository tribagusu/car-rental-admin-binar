import { UilBars, UilAngleDown } from "@iconscout/react-unicons"
import { useState } from "react"

import { useDispatch, useSelector } from "react-redux"
import TYPES from "../redux/types"

const Header = () => {
  const { show } = useSelector((state) => state.show)
  const { searchTerm } = useSelector((state) => state.search)
  const dispatch = useDispatch()

  const handleShow = () => {
    dispatch({
      type: TYPES.SHOW,
      payload: !show,
    })
  }

  const handleSearch = (e) => {
    dispatch({
      type: TYPES.SEARCH_TERM,
      payload: e.target.value,
    })
  }

  console.log(searchTerm)

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
            <input
              onChange={handleSearch}
              type="search"
              placeholder="Search"
              value={searchTerm}
            />
            <button className="btn-outlined-primary">Search</button>
          </div>
          <div className="header-user df-center ">
            <div className="user-logo df-center">
              <p>U</p>
            </div>
            <div className="user-name">
              <p>Unis Badri</p>
            </div>
            <div className="user-detail df-center">
              <UilAngleDown />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

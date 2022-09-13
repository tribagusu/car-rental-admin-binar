import { useState } from "react"
import { Navigate } from "react-router-dom"

import Header from "../layouts/Header"
import Navbar from "../layouts/Navbar"
import Sidebar from "../layouts/Sidebar"

const Layout = () => {
  const user = localStorage.getItem("token")
  const [open, setOpen] = useState(true)
  const [dashboard, setDashboard] = useState(false)
  const [cars, setCars] = useState(false)

  const handleToggle = () => {
    setOpen(!open)
  }

  const handleDashboard = () => {
    setDashboard(true)
    setCars(false)
  }

  const handleCars = () => {
    setCars(true)
    setDashboard(false)
  }

  const props = {
    dashboard,
    cars,
    handleDashboard,
    handleCars,
    open,
    handleToggle,
  }

  return (
    <>
      {user ? (
        <>
          <Navbar {...props} />
          <Header {...props} />
          <Sidebar {...props} />
        </>
      ) : (
        <Navigate to="/login" replace />
      )}
    </>
  )
}

export default Layout

import { useState } from "react"
import { Navigate } from "react-router-dom"

// comp
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

const Layout = () => {
  const user = localStorage.getItem("token")
  const [open, setOpen] = useState(true)
  const [car, setCar] = useState(false)
  const [dsbr, setDsbr] = useState(true)

  const handleToggle = () => {
    setOpen(!open)
  }
  const handleCar = () => {
    setCar(true)
    setDsbr(false)
  }
  const handleDsbr = () => {
    setDsbr(true)
    setCar(false)
  }

  const props = {
    car,
    dsbr,
    handleCar,
    handleDsbr,
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

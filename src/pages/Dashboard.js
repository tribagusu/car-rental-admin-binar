import { Navigate } from "react-router-dom"
import { useState, useEffect } from "react"

// components
import Navbar from "../layouts/Navbar"
import Sidebar from "../layouts/Sidebar"

const Dashboard = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  const user = localStorage.getItem("token")

  // useEffect(() => {
  //   const checkUser = () => {
  //     const user = localStorage.getItem("token")
  //     if (user) {
  //       setIsLoggedIn(true)
  //     } else {
  //       setIsLoggedIn(false)
  //     }
  //   }
  //   checkUser()
  // }, [])

  return (
    <>
      {user ? (
        <div>
          <Navbar />
          <Sidebar />
        </div>
      ) : (
        <Navigate to="/login" replace />
      )}
    </>
  )
}

export default Dashboard

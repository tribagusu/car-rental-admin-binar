import { Navigate } from "react-router-dom"
import { useState, useEffect } from "react"

// components
import Dashboard from "../components/Dashboard"

const DashboardPage = () => {
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
          <Dashboard />
        </div>
      ) : (
        <Navigate to="/login" replace />
      )}
    </>
  )
}

export default DashboardPage

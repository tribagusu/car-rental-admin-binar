import { Navigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"

// components
import Navbar from "../layouts/Navbar"

const Dashboard = () => {
  //   const [user, setUser] = useState(false)
  //   const { token } = useSelector((state) => state.auth)
  const user = localStorage.getItem("token")

  //   useEffect(() => {
  //     const checkUser = () => {
  //       const user = localStorage.getItem("token")
  //       if (user) {
  //         setUser(true)
  //       } else {
  //         setUser(false)
  //       }
  //     }
  //     checkUser()
  //   }, [])

  return (
    <>
      {user ? (
        <div>
          <Navbar />
        </div>
      ) : (
        <Navigate to="/login" replace />
      )}
    </>
  )
}

export default Dashboard

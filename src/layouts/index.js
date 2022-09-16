// import { useState } from "react"
// import { Navigate } from "react-router-dom"

// // comp
// import Header from "./components/Header"
// import Sidebar from "./components/Sidebar"
// import NavDashboard from "./components/Navbar/NavDashboard"
// import NavCars from "./components/Navbar/NavCars"

// const Layout = () => {
//   const user = localStorage.getItem("token")
//   const [open, setOpen] = useState(true)

//   const handleToggle = () => {
//     setOpen(!open)
//     console.log(open)
//   }

//   return (
//     <>
//       {user ? (
//         <>
//           <Header handleToggle={handleToggle} />
//           <Sidebar />
//           <NavDashboard open={open} />
//           <NavCars open={open} />
//         </>
//       ) : (
//         <Navigate to="/login" replace />
//       )}
//     </>
//   )
// }

// export default Layout

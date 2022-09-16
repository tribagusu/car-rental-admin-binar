import React from "react"

//# lazy
// const Layout = React.lazy(() => import("../../layouts"))
// const CarList = React.lazy(() => import("../../components/Car/CarList"))

//# comp
import CarList from "../../components/Car/CarList"
import NavCars from "../../layouts/components/Navbar/NavCars"
import Header from "../../layouts/components/Header"
import Sidebar from "../../layouts/components/Sidebar"

import { useSelector } from "react-redux"

const CarsPage = () => {
  const { show } = useSelector((state) => state.show)

  return (
    <>
      {show && <NavCars />}
      <Header />
      <Sidebar />
      <CarList />
    </>
  )
}

export default CarsPage

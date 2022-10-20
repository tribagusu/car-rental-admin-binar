import React from "react"
import Breadcrumb from "./Breadcrumb"
import CarFilter from "./CarFilter"
import CarListTitle from "./CarListTitle"

const ListHeader = ({ page }) => {
  return (
    <>
      <Breadcrumb />
      <CarListTitle />
      <CarFilter page={page} />
    </>
  )
}

export default ListHeader

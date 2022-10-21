import React from "react"
import Breadcrumb from "./Breadcrumb"
import CarFilter from "./CarFilter"
import CarListTitle from "./CarListTitle"

const ListHeader = (props) => {
  return (
    <>
      <Breadcrumb />
      <CarListTitle />
      <CarFilter {...props} />
    </>
  )
}

export default ListHeader

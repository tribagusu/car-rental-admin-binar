import React, { useEffect } from "react"
import { useDispatch } from "react-redux"

// comp
import ListTable from "./ListTable"
import ListTitle from "./ListTitle"

// func
import { handleOrders } from "../../../redux/actions/carsAction"

const ListOrder = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(handleOrders())
  }, [])

  return (
    <>
      <ListTitle />
      <ListTable />
    </>
  )
}

export default ListOrder

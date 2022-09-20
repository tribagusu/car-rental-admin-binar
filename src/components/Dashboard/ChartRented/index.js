import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

//# comp
import ChartTitle from "./Chart/ChartTitle"
import ChartFilter from "./Chart/ChartFilter"
import Chart from "./Chart/Chart"
//# func
import { handleMonthlyOrder } from "../../../redux/actions/monthlyOrderAction"
import { handleDailyOrder } from "../../../redux/actions/dailyOrderAction"

const ChartRented = () => {
  //# redux state
  const { sepOrder, octOrder, novOrder, decOrder } = useSelector(
    (state) => state.monthlyOrder
  )

  //# function
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(handleMonthlyOrder())
    dispatch(handleDailyOrder(sepOrder, octOrder, novOrder, decOrder))
  }, [])

  return (
    <>
      <ChartTitle />
      <ChartFilter />
      <Chart />
    </>
  )
}

export default ChartRented

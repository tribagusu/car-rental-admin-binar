import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import { handleDataOrder } from "../../../redux/actions/dataOrderAction"

//# comp
import ChartTitle from "./Chart/ChartTitle"
import ChartFilter from "./Chart/ChartFilter"
import Chart from "./Chart/Chart"

const ChartRented = () => {
  const [monthSelected, setMonthSelected] = useState("")

  //# func
  const dispatch = useDispatch()
  const getDataOrder = () => {
    dispatch(handleDataOrder(monthSelected))
  }

  useEffect(() => {
    getDataOrder(monthSelected)
  }, [])

  const props = {
    monthSelected,
    setMonthSelected,
    getDataOrder,
  }

  return (
    <>
      <ChartTitle />
      <ChartFilter {...props} />
      <Chart />
    </>
  )
}

export default ChartRented

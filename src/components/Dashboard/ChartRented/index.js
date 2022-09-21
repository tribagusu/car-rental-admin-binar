import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import { handleDataOrder } from "../../../redux/actions/dataOrderAction"

//# comp
import ChartTitle from "./Chart/ChartTitle"
import ChartFilter from "./Chart/ChartFilter"
import Chart from "./Chart/Chart"

const ChartRented = () => {
  const [value, setValue] = useState("")

  //# func
  const dispatch = useDispatch()
  const getDataOrder = (value) => {
    dispatch(handleDataOrder(value))
  }

  useEffect(() => {
    getDataOrder(value)
  }, [])

  const props = {
    value,
    setValue,
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

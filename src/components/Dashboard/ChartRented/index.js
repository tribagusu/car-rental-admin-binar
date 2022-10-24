import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
// func
import { handleDataOrder } from "../../../redux/actions/dataOrderAction"
// comp
const ChartTitle = React.lazy(() => import("./Chart/ChartTitle"))
const ChartFilter = React.lazy(() => import("./Chart/ChartFilter"))
const Chart = React.lazy(() => import("./Chart/Chart"))

const ChartRented = () => {
  const [monthSelected, setMonthSelected] = useState("")

  // func
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
      <React.Suspense fallback={<div>Loading..</div>}>
        <ChartFilter {...props} />
      </React.Suspense>
      <React.Suspense fallback={<div>Loading..</div>}>
        <Chart />
      </React.Suspense>
    </>
  )
}

export default ChartRented

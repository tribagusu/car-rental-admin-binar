import React, { useState, useEffect } from "react"
import { getMonth } from "./getData/getMonth"

// comp
const ChartTitle = React.lazy(() => import("./Chart/ChartTitle"))
const ChartFilter = React.lazy(() => import("./Chart/ChartFilter"))
const Chart = React.lazy(() => import("./Chart/Chart"))

const ChartRented = () => {
  const [month, setMonth] = useState({})

  useEffect(() => {
    getMonth(setMonth, "oct")
  }, [])

  console.log(month)

  return (
    <>
      <ChartTitle />
      <ChartFilter />
      <Chart />
    </>
  )
}

export default ChartRented

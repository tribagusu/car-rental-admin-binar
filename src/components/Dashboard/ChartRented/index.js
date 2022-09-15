import React, { useState, useEffect } from "react"
import { getMonth } from "./getData/getMonth"

// comp
const ChartTitle = React.lazy(() => import("./Chart/ChartTitle"))
const ChartFilter = React.lazy(() => import("./Chart/ChartFilter"))
const Chart = React.lazy(() => import("./Chart/Chart"))

const ChartRented = () => {
  const [month, setMonth] = useState({})

  const handleMonth = (value) => {
    if (value === "sep") {
      getMonth(setMonth, "sep")
    } else if (value === "oct") {
      getMonth(setMonth, "oct")
    } else if (value === "nov") {
      getMonth(setMonth, "nov")
    } else if (value === "dec") {
      getMonth(setMonth, "dec")
    } else {
      return value
    }
  }

  const props = {
    handleMonth,
  }

  console.log(month)

  return (
    <>
      <ChartTitle />
      <ChartFilter {...props} />
      <Chart />
    </>
  )
}

export default ChartRented

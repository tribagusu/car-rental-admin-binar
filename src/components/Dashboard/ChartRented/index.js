import React, { useState, useEffect } from "react"
import { getMonth } from "./getData/getMonth"
import moment from "moment/moment"

// comp
const ChartTitle = React.lazy(() => import("./Chart/ChartTitle"))
const ChartFilter = React.lazy(() => import("./Chart/ChartFilter"))
const Chart = React.lazy(() => import("./Chart/Chart"))

const ChartRented = () => {
  const [month, setMonth] = useState({})
  const [value, setValue] = useState("")

  const handleMonth = () => {
    getMonth(setMonth, value)
  }

  const props = {
    handleMonth,
    value,
    setValue,
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

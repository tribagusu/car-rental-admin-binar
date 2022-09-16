import React, { useState, useEffect } from "react"
import { getMonth } from "./getData/getMonth"
import { getDateInMonth } from "./getData/getDateInMonth"
import moment from "moment/moment"

// comp
// const ChartTitle = React.lazy(() => import("./Chart/ChartTitle"))
// const ChartFilter = React.lazy(() => import("./Chart/ChartFilter"))
// const Chart = React.lazy(() => import("./Chart/Chart"))

import ChartTitle from "./Chart/ChartTitle"
import ChartFilter from "./Chart/ChartFilter"
import Chart from "./Chart/Chart"

const ChartRented = () => {
  const [month, setMonth] = useState({})
  const [date, setDate] = useState({})
  const [value, setValue] = useState("")

  const handleMonth = () => {
    // getMonth(setMonth, value)
  }

  // getDateInMonth(setDate, value)

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

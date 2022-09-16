import React, { useState, useEffect } from "react"
import { getMonth } from "./getData/getMonth"

// comp
// const ChartTitle = React.lazy(() => import("./Chart/ChartTitle"))
// const ChartFilter = React.lazy(() => import("./Chart/ChartFilter"))
// const Chart = React.lazy(() => import("./Chart/Chart"))
import { getData } from "./getData/getData"

import ChartTitle from "./Chart/ChartTitle"
import ChartFilter from "./Chart/ChartFilter"
import Chart from "./Chart/Chart"

const ChartRented = () => {
  const [month, setMonth] = useState({})
  const [data, setData] = useState([])
  const [value, setValue] = useState("")

  const handleMonth = () => {
    // getMonth(setMonth, value)
    getData(setData)
  }

  const props = {
    handleMonth,
    value,
    setValue,
    data,
  }

  return (
    <>
      <ChartTitle />
      <ChartFilter {...props} />
      <Chart {...props} />
    </>
  )
}

export default ChartRented

import React from "react"

//# comp
import ChartTitle from "./Chart/ChartTitle"
import ChartFilter from "./Chart/ChartFilter"
import Chart from "./Chart/Chart"

const ChartRented = () => {
  return (
    <>
      <ChartTitle />
      <ChartFilter />
      <Chart />
    </>
  )
}

export default ChartRented

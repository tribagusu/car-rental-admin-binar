import { useState, useEffect } from "react"

import Breadcrumb from "./Breadcrumb"
import DataTitle from "./DataTitle"
import ChartFilter from "./ChartFilter"
import RentedCarChart from "./RentedCarChart"

// func
import { getDataRented } from "../../hooks/DataRentedCars"

const DashboardComp = () => {
  // const [dataMonthly, setDataMonthly] = useState("")
  const [listMonth, setListMonth] = useState("")
  const [dataRented, setDataRented] = useState("")

  useEffect(() => {
    getDataRented(setDataRented, setListMonth)
  }, [])

  // console.table(listMonth)

  return (
    <section className="dashboard">
      <main className="dashboard-container">
        <Breadcrumb />
        <DataTitle />
        <ChartFilter listMonth={listMonth} />
        <RentedCarChart />
      </main>
    </section>
  )
}

export default DashboardComp

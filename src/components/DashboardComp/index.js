import React from "react"
import Breadcrumb from "./Breadcrumb"
import DataTitle from "./DataTitle"
import ChartFilter from "./ChartFilter"
import RentedCarChart from "./RentedCarChart"

const DashboardComp = () => {
  return (
    <section className="dashboard">
      <main className="dashboard-container">
        <Breadcrumb />
        <DataTitle />
        <ChartFilter />
        <RentedCarChart />
      </main>
    </section>
  )
}

export default DashboardComp

import React from "react"
import Breadcrumb from "./Breadcrumb"
import DataTitle from "./DataTitle"
import ChartFilter from "./ChartFilter"
import RentedChart from "./RentedChart"

const DashboardComp = () => {
  return (
    <section className="dashboard">
      <main className="dashboard-container ">
        <Breadcrumb />
        <DataTitle />
        <ChartFilter />
        {/* <RentedChart /> */}
      </main>
    </section>
  )
}

export default DashboardComp

import React from "react"
import Breadcrumb from "./Breadcrumb"
import DataTitle from "./DataTitle"
import MonthFilter from "./MonthFilter"
import RentedChart from "./RentedChart"

const DashboardComp = () => {
  return (
    <section className="dashboard">
      <main className="dashboard-container ">
        <Breadcrumb />
        <DataTitle />
        {/* <MonthFilter /> */}
        {/* <RentedChart /> */}
      </main>
    </section>
  )
}

export default DashboardComp

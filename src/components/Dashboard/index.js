import React, { useEffect } from "react"

// components
// const Breadcrumb = React.lazy(() => import("./Breadcrumb"))
// const ChartRented = React.lazy(() => import("./ChartRented"))
// const ListOrder = React.lazy(() => import("./ListOrder"))

import Breadcrumb from "./Breadcrumb"
import ChartRented from "./ChartRented"
import ListOrder from "./ListOrder"

const Dashboard = () => {
  return (
    <section className="dashboard">
      <main className="dashboard-container">
        <Breadcrumb />
        <ChartRented />
        <ListOrder />
      </main>
    </section>
  )
}

export default Dashboard

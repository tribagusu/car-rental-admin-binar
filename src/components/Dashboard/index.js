import React from "react"
// comp
const Breadcrumb = React.lazy(() => import("./Breadcrumb"))
const ChartRented = React.lazy(() => import("./ChartRented"))
const ListOrder = React.lazy(() => import("./ListOrder"))

const Dashboard = () => {
  return (
    <section className="dashboard">
      <main className="dashboard-container">
        <Breadcrumb />
        <React.Suspense fallback={<div>Loading..</div>}>
          <ChartRented />
        </React.Suspense>
        <React.Suspense fallback={<div>Loading..</div>}>
          <ListOrder />
        </React.Suspense>
      </main>
    </section>
  )
}

export default Dashboard

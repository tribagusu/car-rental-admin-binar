import { useEffect } from "react"

// components
import Breadcrumb from "./Breadcrumb"
import DataTitle from "./DataTitle"
import ChartFilter from "./ChartFilter"
import RentedCarChart from "./RentedCarChart"

// redux
import { handleRentedMonthly } from "../../redux/actions/rentedCarAction"
import { useDispatch } from "react-redux"

const DashboardComp = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(handleRentedMonthly())
  }, [])

  // console.table(listMonth)

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

import { useState, useEffect } from "react"

//# chart
import { Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js"
import { orderList } from "../../../../data/dataChart"

ChartJS.register(CategoryScale, LinearScale, BarElement)

const Chart = () => {
  const [dataChart, setDataChart] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
      },
    ],
  })

  useEffect(() => {
    setDataChart({
      labels: orderList.map((data) => data.date),
      datasets: [
        {
          label: "Rented Car",
          data: orderList.map((data) => data.totalOrder),
          backgroundColor: "#586B90",
        },
      ],
    })
  }, [])

  return (
    <section className="rented-car-chart">
      <div className="chart-container">
        <Bar data={dataChart} />
        <p></p>
      </div>
    </section>
  )
}

export default Chart

import { useState, useEffect } from "react"
import { useSelector } from "react-redux"

//# chart
import { Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement)
const Chart = () => {
  //# redux state
  const { dataOrder } = useSelector((state) => state.dataOrder)
  //# chart state
  const [dataChart, setDataChart] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
      },
    ],
  })

  //# function sort and count duplicate
  const chartOrder = dataOrder
    .sort((a, b) => a.localeCompare(b))
    .reduce((accVal, val) => {
      accVal[val] = (accVal[val] || 0) + 1
      return accVal
    }, {})

  useEffect(() => {
    // console.log(chartOrder)
    setDataChart({
      labels: Object.keys(chartOrder),
      datasets: [
        {
          label: "Rented Car",
          data: Object.values(chartOrder),
          backgroundColor: "#586B90",
        },
      ],
    })
  }, [chartOrder])

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

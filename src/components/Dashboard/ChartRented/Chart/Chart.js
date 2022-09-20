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

  //# function sort by number
  function sortArray(a, b) {
    return a - b
  }
  const sortedOrder = dataOrder.sort(sortArray)

  //# function count duplicate
  const newOrder = sortedOrder.reduce((accVal, val) => {
    accVal[val] = (accVal[val] || 0) + 1
    return accVal
  }, {})

  useEffect(() => {
    setDataChart({
      labels: Object.keys(newOrder),
      datasets: [
        {
          label: "Rented Car",
          data: Object.values(newOrder),
          backgroundColor: "#586B90",
        },
      ],
    })
  }, [dataOrder])

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

import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

const ChartFilter = () => {
  // state
  const [month, setMonth] = useState("")

  // function
  const handleMonth = (e) => {
    setMonth(e.target.value)
  }

  useEffect(() => {}, [])

  return (
    <section className="chart-filter">
      <div className="chart-filter-container">
        <p>Month</p>
        <div className="filter">
          <select value={month} onChange={handleMonth}>
            <option value={"Sep"} defaultValue>
              Sep - 2022
            </option>
            <option value={"Oct"}>Oct - 2022</option>
            <option value={"Nov"}>Nov - 2022</option>
            <option value={"Dec"}>Dec - 2022</option>
          </select>
          <button onClick={() => console.log(month)} className="btn-primary">
            Go
          </button>
        </div>
      </div>
    </section>
  )
}

export default ChartFilter

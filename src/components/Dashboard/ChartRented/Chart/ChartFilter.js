import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

const ChartFilter = (props) => {
  const { handleMonth } = props

  // state
  const [value, setValue] = useState("")

  // console.log(value)

  return (
    <section className="chart-filter">
      <div className="chart-filter-container">
        <p>Month</p>
        <div className="filter">
          <select value={value} onChange={(e) => setValue(e.target.value)}>
            <option value={"sep"} defaultValue>
              Sep - 2022
            </option>
            <option value={"oct"}>Oct - 2022</option>
            <option value={"nov"}>Nov - 2022</option>
            <option value={"dec"}>Dec - 2022</option>
          </select>
          <button onClick={() => handleMonth(value)} className="btn-primary">
            Go
          </button>
        </div>
      </div>
    </section>
  )
}

export default ChartFilter

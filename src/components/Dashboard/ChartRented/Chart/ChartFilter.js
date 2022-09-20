import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import { handleDataOrder } from "../../../../redux/actions/dataOrderAction"

const ChartFilter = () => {
  const [value, setValue] = useState("Sep")

  //# func
  const dispatch = useDispatch()
  const getDataOrder = (value) => {
    dispatch(handleDataOrder(value))
  }

  useEffect((value) => {
    getDataOrder(value)
  }, [])

  return (
    <section className="chart-filter">
      <div className="chart-filter-container">
        <p>Month</p>
        <div className="filter">
          <select onChange={(e) => setValue(e.target.value)}>
            <option value={"Sep"} defaultValue>
              Sep - 2022
            </option>
            <option value={"Oct"}>Oct - 2022</option>
            <option value={"Nov"}>Nov - 2022</option>
            <option value={"Dec"}>Dec - 2022</option>
          </select>
          <button onClick={() => getDataOrder(value)} className="btn-primary">
            Go
          </button>
        </div>
      </div>
    </section>
  )
}

export default ChartFilter

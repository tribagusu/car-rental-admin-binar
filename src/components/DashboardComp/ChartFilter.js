import React from "react"

const ChartFilter = () => {
  return (
    <section className="chart-filter">
      <div className="chart-filter-container">
        <p>Month</p>
        <div className="filter">
          <select name="" id="">
            <option value="june">June - 2022 </option>
            <option value="june">July - 2022 </option>
            <option value="june">Aug - 2022 </option>
            <option value="june">Sept - 2022 </option>
            <option value="june">Oct - 2022 </option>
          </select>
          <button className="btn-primary">Go</button>
        </div>
      </div>
    </section>
  )
}

export default ChartFilter

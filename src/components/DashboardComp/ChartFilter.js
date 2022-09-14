import React from "react"

const ChartFilter = ({ listMonth }) => {
  return (
    <section className="chart-filter">
      <div className="chart-filter-container">
        <p>Month</p>
        <div className="filter">
          <select name="" id="">
            {[...new Set(listMonth)].map((item) => {
              return <option>{item}</option>
            })}
          </select>
          <button className="btn-primary">Go</button>
        </div>
      </div>
    </section>
  )
}

export default ChartFilter

const ChartFilter = (props) => {
  const { value, setValue, getDataOrder } = props

  return (
    <section className="chart-filter">
      <div className="chart-filter-container">
        <p>Month</p>
        <div className="filter">
          <select onChange={(e) => setValue(e.target.value)}>
            <option value={"Oct"} defaultValue>
              Oct - 2022
            </option>
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

import { useSelector } from "react-redux"

const ChartFilter = (props) => {
  const { monthSelected, setMonthSelected, getDataOrder } = props
  const { theMonthOrderData: months } = useSelector((state) => state.dataOrder)

  return (
    <section className="chart-filter">
      <div className="chart-filter-container">
        <p>Month</p>
        <div className="filter">
          <select
            defaultValue={true}
            onChange={(e) => setMonthSelected(e.target.value)}
          >
            {months?.map((month, index) => (
              <option key={index}>{month}</option>
            ))}
          </select>
          <button
            onClick={() => getDataOrder(monthSelected)}
            className="btn-primary"
          >
            Go
          </button>
        </div>
      </div>
    </section>
  )
}

export default ChartFilter

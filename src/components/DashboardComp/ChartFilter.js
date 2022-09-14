import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import { setTheMonth } from "../../redux/actions/rentedCarAction"

const ChartFilter = () => {
  const { listMonth, theMonth } = useSelector((state) => state.rentedCar)
  // const [theMonth, setTheMonth] = useState()
  // const [value, setValue] = useState(listMonth)

  const dispatch = useDispatch()
  const handleTheMonth = (e) => {
    dispatch(setTheMonth(e))
  }

  const handleClick = () => {
    console.log(theMonth)
  }

  // console.log(theMonth)

  return (
    <section className="chart-filter">
      <div className="chart-filter-container">
        <p>Month</p>
        <div className="filter">
          <select onChange={handleTheMonth} name="" id="">
            {[...new Set(listMonth)].map((item) => {
              return <option>{item}</option>
            })}
          </select>
          <button onClick={handleClick} className="btn-primary">
            Go
          </button>
        </div>
      </div>
    </section>
  )
}

export default ChartFilter

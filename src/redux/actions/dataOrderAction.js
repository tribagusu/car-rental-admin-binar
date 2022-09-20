import TYPES from "../types"
import axios from "axios"
import moment from "moment/moment"

const url = "https://bootcamp-rent-car.herokuapp.com/admin/order"

export const handleDataOrder = (value) => {
  return (dispatch) => {
    axios
      .get(url)
      .then((res) => {
        const datas = res.data
        const dataOrder = datas.map((data) =>
          moment(data.start_rent_at).format("D MMM")
        )
        //# orders
        // sep
        const sepOrder = dataOrder.filter((data) => data.includes(value))
        const sepDailyOrder = sepOrder.map((date) => moment(date).format("D"))
        // oct
        const octOrder = dataOrder.filter((data) => data.includes(value))
        const octDailyOrder = octOrder.map((date) => moment(date).format("D"))
        // nov
        const novOrder = dataOrder.filter((data) => data.includes(value))
        const novDailyOrder = novOrder.map((date) => moment(date).format("D"))
        // dec
        const decOrder = dataOrder.filter((data) => data.includes(value))
        const decDailyOrder = decOrder.map((date) => moment(date).format("D"))

        //# dispatch
        dispatch({
          type: TYPES.GET_SEP_DAILY_ORDER,
          payload: sepDailyOrder,
        })
        dispatch({
          type: TYPES.GET_OCT_DAILY_ORDER,
          payload: octDailyOrder,
        })
        dispatch({
          type: TYPES.GET_NOV_DAILY_ORDER,
          payload: novDailyOrder,
        })
        dispatch({
          type: TYPES.GET_DEC_DAILY_ORDER,
          payload: decDailyOrder,
        })
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}

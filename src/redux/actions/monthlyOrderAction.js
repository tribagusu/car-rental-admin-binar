import TYPES from "../types"
import axios from "axios"
import moment from "moment/moment"
import { mockComponent } from "react-dom/test-utils"

const url = "https://bootcamp-rent-car.herokuapp.com/admin/order"

export const handleMonthlyOrder = () => {
  return (dispatch) => {
    axios
      .get(url)
      .then((res) => {
        const datas = res.data
        const dataOrder = datas.map((data) =>
          moment(data.start_rent_at).format("D MMM")
        )
        //# orders
        const sepOrder = dataOrder.filter((data) => data.includes("Sep"))
        const octOrder = dataOrder.filter((data) => data.includes("Oct"))
        const novOrder = dataOrder.filter((data) => data.includes("Nov"))
        const decOrder = dataOrder.filter((data) => data.includes("Dec"))

        //# dispatch
        dispatch({
          type: TYPES.GET_SEP_ORDER,
          payload: sepOrder,
        })
        dispatch({
          type: TYPES.GET_OCT_ORDER,
          payload: octOrder,
        })
        dispatch({
          type: TYPES.GET_NOV_ORDER,
          payload: novOrder,
        })
        dispatch({
          type: TYPES.GET_DEC_ORDER,
          payload: decOrder,
        })
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}

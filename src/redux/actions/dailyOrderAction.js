import TYPES from "../types"
import moment from "moment/moment"

export const handleDailyOrder = (par1, par2, par3, par4) => {
  return (dispatch) => {
    dispatch({
      type: TYPES.GET_SEP_DAILY_ORDER,
      payload: par1.map((date) => moment(date).format("D")),
    })
    dispatch({
      type: TYPES.GET_OCT_DAILY_ORDER,
      payload: par2.map((date) => moment(date).format("D")),
    })
    dispatch({
      type: TYPES.GET_NOV_DAILY_ORDER,
      payload: par3.map((date) => moment(date).format("D")),
    })
    dispatch({
      type: TYPES.GET_DEC_DAILY_ORDER,
      payload: par4.map((date) => moment(date).format("D")),
    })
  }
}

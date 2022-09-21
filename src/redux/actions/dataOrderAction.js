import TYPES from "../types"
import axios from "axios"
import moment from "moment/moment"

const url = "https://bootcamp-rent-car.herokuapp.com/admin/order"

export const handleDataOrder = (value) => {
  return (dispatch) => {
    axios
      .get(url)
      .then((res) => {
        //# get data start_rent
        const datas = res.data
        const dataRent = datas.map((data) =>
          moment(data.start_rent_at).format("D MMM")
        )
        //# filter by value of month
        const order = dataRent.filter((data) => data.includes(value))
        const dataOrder = order.map((date) => moment(date).format("D"))
        //# dispatch
        dispatch({
          type: TYPES.GET_DATA_ORDER,
          payload: dataOrder,
        })
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}

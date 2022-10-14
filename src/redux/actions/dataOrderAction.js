import TYPES from "../types"
import axios from "axios"
import moment from "moment/moment"
import access_token from "../../hooks/accessToken"

const url =
  "https://bootcamp-rent-cars.herokuapp.com/admin/v2/order?sort=created_at%3Adesc&page=1&pageSize=10"

export const handleDataOrder = (value) => {
  return (dispatch) => {
    axios
      .get(url, {
        headers: { access_token },
      })
      .then((res) => {
        console.log(res)
        //# get data start_rent
        const datas = res.data.orders
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

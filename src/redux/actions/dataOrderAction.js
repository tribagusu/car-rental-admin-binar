import TYPES from "../types"
import axios from "axios"
import moment from "moment/moment"
import access_token from "../../hooks/accessToken"

const url =
  "https://bootcamp-rent-cars.herokuapp.com/admin/v2/order?sort=created_at%3Adesc&page=1&pageSize=1000"

export const handleDataOrder = (monthSelected) => {
  return (dispatch) => {
    axios
      .get(url, {
        headers: { access_token },
      })
      .then((res) => {
        //# get data start_rent
        const datas = res.data.orders
        const dataRent = datas.map((data) =>
          moment(data.start_rent_at).format("D MMM YYYY")
        )
        //# get the month
        const dataMonth = datas.map((data) =>
          moment(data.start_rent_at).format("MMM YYYY")
        )
        const dataMonthSorted = dataMonth
          .reduce(
            (acc, char) => (acc.includes(char) ? acc : [...acc, char]),
            []
          )
          .sort(function sortByMonthYear(a, b) {
            var as = a.split(" "),
              bs = b.split(" "),
              ad = new Date(as[0] + " 1," + as[1]),
              bd = new Date(bs[0] + " 1," + bs[1])
            return ad.getTime() - bd.getTime()
          })

        //# filter by value of month
        // const thisMonth = moment(new Date()).format("MMM")
        const order = dataRent.filter((data) =>
          data.includes(monthSelected ? monthSelected : "Sep 2022")
        )
        const dataOrder = order.map((date) => moment(date).format("D"))
        //# dispatch
        dispatch({
          type: TYPES.GET_DATA_ORDER,
          payload: dataOrder,
        })
        dispatch({
          type: TYPES.GET_THE_MONTH_ORDER_DATA,
          payload: dataMonthSorted,
        })
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}

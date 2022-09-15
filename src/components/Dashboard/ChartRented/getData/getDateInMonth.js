import axios from "axios"
import moment from "moment/moment"

export const getDateInMonth = (setDate, query) => {
  axios
    .get("https://bootcamp-rent-car.herokuapp.com/admin/order")
    .then((res) => {
      const data = res.data
      const getData = data
        .map((data) => moment(data.start_rent_at).format("D MMM"))
        .sort()
      const filterGetData = (data, query) => {
        return data.filter(
          (element) => element.toLowerCase().indexOf(query.toLowerCase()) !== -1
        )
      }
      const result = filterGetData(getData, query)
      setDate(result)
    })
    .catch((err) => {
      console.log(err.message)
    })
}

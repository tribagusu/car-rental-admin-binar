import axios from "axios"
import moment from "moment/moment"

export const getDataRented = (setDataRented, setListMonth) => {
  axios
    .get("https://bootcamp-rent-car.herokuapp.com/admin/order")
    .then((res) => {
      const dataAll = res.data.map((data) =>
        moment(data.start_rent_at).format("D MMM")
      )
      setDataRented(dataAll)
      const listMonth = res.data.map((data) =>
        moment(data.start_rent_at).format("MMM - YYYY")
      )
      setListMonth(listMonth.sort())
      //   console.log(res.data)
    })
    .catch((err) => {
      console.log(err.message)
    })
}

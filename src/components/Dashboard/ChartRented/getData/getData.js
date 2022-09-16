import axios from "axios"

export const getData = (setData) => {
  axios
    .get("http://localhost:8000/sep")
    .then((res) => {
      const data = res.data
      //   const order = data.map((data) => data.totalOrder)
      setData(data)
      //   console.log(order)
    })
    .catch((err) => console.log(err.message))
}

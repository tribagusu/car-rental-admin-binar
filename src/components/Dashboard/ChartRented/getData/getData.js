// import axios from "axios"
// import { useState, useEffect } from "react"

// const GetData = (setData) => {
//   const [sep, setSep] = useState([])
//   const [oct, setOct] = useState([])
//   const [nov, setNov] = useState([])
//   const [dec, setDec] = useState([])

//   const handleData = () => {
//     axios
//       .get("https://bootcamp-rent-car.herokuapp.com/admin/order")
//       .then((res) => {
//         const data = res.data
//         setSep(data)
//       })
//       .catch((err) => console.log(err.message))
//   }

//   useEffect(() => {
//     handleData()
//   }, [])

//   console.log(sep)

//   return <div></div>
// }

// export default GetData

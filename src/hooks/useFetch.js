import { useState, useEffect } from "react"

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Ini error bro!")
        }
        return res.json()
      })
      .then((data) => {
        setError(null)
        setIsLoading(false)
        setData(data)
      })
      .catch((err) => {
        setIsLoading(false)
        setError(err.message)
      })

    // return () => console.log("cleanup");
  }, [url])

  return { data, isLoading, error }
}

export default useFetch

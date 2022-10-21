import React, { useState } from "react"
import { useQuery } from "@tanstack/react-query"
// func
import { getCars } from "../../hooks/useFetch"
// comp
import CarCard from "./CarList/CarCard"
import ListHeader from "./CarList/ListHeader"

const CarList = () => {
  const [page, setPage] = useState(1)
  const [category, setCategory] = useState("")

  // fetch query
  const { isLoading, data, isPreviousData } = useQuery(
    ["cars", page, category],
    () => getCars(page, category),
    {
      keepPreviousData: true,
    }
  )

  const props = {
    page,
    category,
    setPage,
    setCategory,
    data,
    isLoading,
    isPreviousData,
  }

  return (
    <section className="car-list">
      <main className="car-list-container">
        <ListHeader {...props} />
        <CarCard {...props} />
      </main>
    </section>
  )
}

export default CarList

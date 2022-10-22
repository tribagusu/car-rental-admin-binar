import React, { useState } from "react"
import { useQuery } from "@tanstack/react-query"
// func
import { getCars } from "../../hooks/useFetch"
// comp
import CarCard from "./CarList/CarCard"
import ListHeader from "./CarList/ListHeader"
import { useSelector } from "react-redux"

const CarList = () => {
  const [page, setPage] = useState(1)
  const [category, setCategory] = useState("")
  const { searchQuery: name } = useSelector((state) => state.searchQuery)

  // fetch query
  const { isLoading, data, isPreviousData } = useQuery(
    ["cars", name, category, page],
    () => getCars(name, category, page),
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

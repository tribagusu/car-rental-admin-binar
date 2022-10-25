import React, { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { useSelector } from "react-redux"
// func
import { getCars } from "../../hooks/useFetch"
import { useAtom } from "jotai"
import { searchQueryAtom } from "../../layouts/Header"
// comp
const CarCard = React.lazy(() => import("./CarList/CarCard"))
const ListHeader = React.lazy(() => import("./CarList/ListHeader"))

const CarList = () => {
  const [page, setPage] = useState(1)
  const [category, setCategory] = useState("")
  // const { searchQuery: name } = useSelector((state) => state.searchQuery)

  const [searchQuery] = useAtom(searchQueryAtom)

  // fetch query
  const { isLoading, data, isPreviousData } = useQuery(
    ["cars", searchQuery, category, page],
    () => getCars(searchQuery, category, page),
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
        <React.Suspense fallback={<div>Loading..</div>}>
          <ListHeader {...props} />
        </React.Suspense>
        <React.Suspense fallback={<div>Loading..</div>}>
          <CarCard {...props} />
        </React.Suspense>
      </main>
    </section>
  )
}

export default CarList

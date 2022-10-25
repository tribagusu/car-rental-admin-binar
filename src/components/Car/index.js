import React, { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { useAtom } from "jotai"
// func
import { getCars } from "../../hooks/useFetch"
import { searchQueryAtom } from "../../layouts/Header"
import useDebounce from "../../hooks/useDebounce"

// comp
const CarCard = React.lazy(() => import("./CarList/CarCard"))
const ListHeader = React.lazy(() => import("./CarList/ListHeader"))

const CarList = () => {
  const [page, setPage] = useState(1)
  const [category, setCategory] = useState("")
  const [searchQuery] = useAtom(searchQueryAtom)
  const debouncedSearchQuery = useDebounce(searchQuery, 300)

  // fetch query
  const { isLoading, data, isPreviousData } = useQuery(
    ["cars", debouncedSearchQuery, category, page],
    () => getCars(debouncedSearchQuery, category, page),
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

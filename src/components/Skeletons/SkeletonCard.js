import React from "react"
import Shimmer from "./Shimmer"
import SkeletonElement from "./SkeletonElement"

const SkeletonCard = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-card__container">
        <SkeletonElement type="skeleton-card" />
        <SkeletonElement type="skeleton-card" />
        <SkeletonElement type="skeleton-card" />
        <SkeletonElement type="skeleton-card" />
        <SkeletonElement type="skeleton-card" />
        <SkeletonElement type="skeleton-card" />
      </div>
      <Shimmer />
    </div>
  )
}

export default SkeletonCard

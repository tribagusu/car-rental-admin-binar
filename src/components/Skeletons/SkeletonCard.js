import React from "react"
import Shimmer from "./Shimmer"
import SkeletonBase from "./SkeletonBase"

const SkeletonCard = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-card__container">
        <SkeletonBase type="skeleton-card" />
        <SkeletonBase type="skeleton-card" />
        <SkeletonBase type="skeleton-card" />
        <SkeletonBase type="skeleton-card" />
        <SkeletonBase type="skeleton-card" />
        <SkeletonBase type="skeleton-card" />
        <SkeletonBase type="skeleton-card" />
        <SkeletonBase type="skeleton-card" />
        <SkeletonBase type="skeleton-card" />
      </div>
      <Shimmer />
    </div>
  )
}

export default SkeletonCard

import React from "react"

const SkeletonBase = ({ type }) => {
  const classes = `skeleton ${type}`

  return <div className={classes}></div>
}

export default SkeletonBase

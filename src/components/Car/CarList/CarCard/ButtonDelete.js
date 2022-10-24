import React, { useState } from "react"

// comp
const ModalDelete = React.lazy(() => import("./ModalDelete/ModalDelete"))

const ButtonDelete = ({ carId }) => {
  const [showModal, setShowModal] = useState(false)

  const handleModal = () => {
    setShowModal(!showModal)
    console.log(carId)
  }

  return (
    <>
      <button
        onClick={handleModal}
        className="button-delete btn-outlined-danger"
      >
        <p>Delete</p>
      </button>
      {showModal && (
        <React.Suspense fallback={<div>Loading..</div>}>
          <ModalDelete carId={carId} handleModal={handleModal} />
        </React.Suspense>
      )}
    </>
  )
}

export default ButtonDelete

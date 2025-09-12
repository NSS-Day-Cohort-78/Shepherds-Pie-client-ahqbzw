import React from "react"


export const AddToOrderButton = () => {

  const handleOrder = (e) => {
    e.preventDefault()
    console.log("I work!")
  }

  return (
    <button
      onClick={handleOrder}>
      Add to Order
    </button>
  )
}

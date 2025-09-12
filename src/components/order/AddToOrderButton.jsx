import React from "react"



export const AddToOrderButton = () => {
  
  const handleOrder = (e) => {
    e.preventDefault()
  }

  return (
    <button
      onClick={handleOrder}>
      Add to Order
    </button>
  )
}

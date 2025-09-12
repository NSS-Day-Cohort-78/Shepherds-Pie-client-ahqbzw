import React, { useEffect } from "react"
import { getPizzas } from "../services/PizzasServices"

export const AddToOrderButton = ({
    pizzaToppings,
    setPizzaToppings,
    isChecked,
    allPizzas,
    setAllPizzas,
    pizza
}) => {
    /* 
  orderId
  sizeId
  cheeseId
  sauceId
  */

    // get toppings for db

    useEffect(() => {
        getPizzas().then(setAllPizzas)
    }, [])

    useEffect(() => {
        const pizzaId = allPizzas.length
        const copyIsChecked = [...isChecked]
        const filteredChecked = copyIsChecked
            .filter(c => {
                return c.checked
            })
            .map(fil => {
                return {
                    pizzaId: pizzaId + 1,
                    toppingId: fil.id
                }
            })

        setPizzaToppings(filteredChecked)
    }, [allPizzas, isChecked])

    const handleOrder = e => {
        e.preventDefault()
    }

    return <button onClick={handleOrder}>Add to Order</button>
}

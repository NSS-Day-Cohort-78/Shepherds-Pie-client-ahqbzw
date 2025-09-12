import React, { useEffect } from "react"
import { addPizzaToOrder, getPizzas } from "../services/PizzasServices"
import { getOrders } from "../services/OrdersServices"
import {
    addPizzaToppingsToOrder,
    getToppings
} from "../services/ToppingsServices"

export const AddToOrderButton = ({
    pizzaToppings,
    setPizzaToppings,
    isChecked,
    allPizzas,
    setAllPizzas,
    pizza,
    allOrders,
    setAllOrders,
    setPizza,
    setToppings
}) => {
    useEffect(() => {
        getPizzas().then(setAllPizzas)
        getOrders().then(setAllOrders)
    }, [pizza])
    /* 
  orderId
  sizeId
  cheeseId
  sauceId
  */

    // get pizza for db
    useEffect(() => {
        const orderId = allOrders.length + 1
        const copyPizza = { ...pizza }
        copyPizza.orderId = orderId
        setPizza(copyPizza)
    }, [allOrders])

    // get toppings for db

    useEffect(() => {
        const pizzaId = allPizzas.length + 1
        const copyIsChecked = [...isChecked]
        const filteredChecked = copyIsChecked
            .filter(c => {
                return c.checked
            })
            .map(fil => {
                return {
                    pizzaId: pizzaId,
                    toppingId: fil.id
                }
            })

        setPizzaToppings(filteredChecked)
    }, [allPizzas, isChecked])

    const handleOrder = e => {
        e.preventDefault()
        addPizzaToOrder(pizza)

        pizzaToppings.forEach(topping => {
            addPizzaToppingsToOrder(topping)
        })

        getPizzas().then(setAllPizzas)
        getToppings().then(setToppings)

        setPizza({
            orderId: 0,
            sizeId: 0,
            cheeseId: 0,
            sauceId: 0
        })
    }

    return <button onClick={handleOrder}>Add to Order</button>
}

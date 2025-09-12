import React, { useEffect, useState } from "react"
import { getOrders } from "../services/OrdersServices"
import { getPizzasByOrder } from "../services/PizzasServices"
import { getPizzaToppingsExpand } from "../services/ToppingsServices"

export const ShowPizzasForOrder = ({ allOrders, setAllOrders }) => {
    const [pizzaOrder, setPizzaOrder] = useState([])
    const [orderToppings, setOrderToppings] = useState([])

    useEffect(() => {
        getOrders().then(setAllOrders)
        getPizzaToppingsExpand().then(setOrderToppings)
    }, [])

    useEffect(() => {
        const id = allOrders.length + 1

        getPizzasByOrder(id).then(setPizzaOrder)
    }, [allOrders])
    return (
        <div>
            {pizzaOrder.map(p => {
                const filteredToppings = orderToppings.filter(
                    t => t.pizzaId === p.id
                )
                return (
                    <section key={p.id}>
                        <p>{p.size.name}</p>
                        <p>{p.cheese.name}</p>
                        <p>{p.sauce.name}</p>
                        {filteredToppings.map(f => {
                            return (
                                <>
                                    <p key={f.id}>{f.topping.name}</p>
                                    <p>{f.topping.price}</p>
                                </>
                            )
                        })}
                    </section>
                )
            })}
        </div>
    )
}

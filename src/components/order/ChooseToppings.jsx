import React, { useEffect, useState } from "react"
import { getToppings } from "../services/ToppingsServices"

export const ChooseToppings = ({
    pizzaToppings,
    setPizzaToppings,
    toppings,
    setToppings
}) => {
    useEffect(() => {
        getToppings().then(setToppings)
    }, [])

    // single pizza topping state
    const [pizzaTop, setPizzaTop] = useState({
        pizzaId: 0,
        toppingId: 0
    })

    // add single pizza topping to array of all toppings

    useEffect(() => {
        const copyPizzaToppings = [...pizzaToppings, pizzaTop]
        setPizzaToppings(copyPizzaToppings)
    }, [pizzaTop])

    // it is selecting a topping on checked and uncheck
    const handleChange = e => {
        const copyPizzaTop = { ...pizzaTop }
        copyPizzaTop[e.target.name] = e.target.value
        setPizzaTop(copyPizzaTop)
    }

    return (
        <fieldset>
            <legend>Choose Toppings</legend>
            {toppings.map(t => (
                <div key={t.id}>
                    <input
                        onChange={handleChange}
                        type="checkbox"
                        name="toppingId"
                        id={`topping-${t.id}`}
                        value={t.id}
                    />
                    <label htmlFor={`topping-${t.id}`}>{t.name}</label>
                </div>
            ))}
        </fieldset>
    )
}

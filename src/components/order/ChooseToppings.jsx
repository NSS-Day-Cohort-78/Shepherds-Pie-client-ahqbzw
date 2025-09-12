import React, { useEffect, useState } from "react"
import { getToppings } from "../services/ToppingsServices"

export const ChooseToppings = ({
    toppings,
    setToppings,
    isChecked,
    setIsChecked
}) => {
    useEffect(() => {
        getToppings().then(setToppings)
    }, [])

    const handleChange = e => {
        const copyIsChecked = [...isChecked]

        const found = copyIsChecked.map(c => {
            return c.id === parseInt(e.target.value)
                ? (c.checked = !c.checked)
                : c
        })

        setIsChecked(found)
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

import React, { useEffect, useState } from "react"
import { getToppings } from "../services/ToppingsServices"
import { CheckBoxes } from "./CheckBoxes"

export const ChooseToppings = ({
    toppings,
    setToppings,
    isChecked,
    setIsChecked
}) => {
    useEffect(() => {
        getToppings().then(setToppings)
    }, [])

    return (
        <fieldset>
            <legend>Choose Toppings</legend>
            {toppings.map(t => {
                return (
                    <CheckBoxes
                        key={t.id}
                        isChecked={isChecked}
                        setIsChecked={setIsChecked}
                        t={t}
                        toppings={toppings}
                    />
                )
            })}
        </fieldset>
    )
}

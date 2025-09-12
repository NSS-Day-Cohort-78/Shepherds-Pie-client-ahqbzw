import React, { useEffect } from "react"
import { getSauces } from "../services/SaucesServices"

export const ChooseSauces = ({ pizza, setPizza, sauces, setSauces }) => {
    useEffect(() => {
        getSauces().then(setSauces)
    }, [])

    const handleChange = e => {
        const copyPizza = { ...pizza }
        copyPizza.sauceId = parseInt(e.target.value)
        setPizza(copyPizza)
    }

    return (
        <fieldset>
            <label htmlFor="sauces">Sauce</label>
            <select onChange={handleChange} name="sauces" id="sauces">
                <option value="0">Choose Sauce</option>
                {sauces.map(s => {
                    return (
                        <option key={s.id} value={s.id}>
                            {s.name}
                        </option>
                    )
                })}
            </select>
        </fieldset>
    )
}

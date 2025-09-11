import React, { useEffect } from "react"
import { getSauces } from "../services/SaucesServices"

export const ChooseSauces = ({ sauces, setSauces }) => {
    useEffect(() => {
        getSauces().then(setSauces)
    }, [])
    return (
        <fieldset>
            <label htmlFor="sauces">Sauce</label>
            <select name="sauces" id="sauces">
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

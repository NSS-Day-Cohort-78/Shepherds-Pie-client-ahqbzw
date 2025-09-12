import React, { useEffect } from "react"
import { getSizes } from "../services/SizeServices"

export const ChooseSizes = ({ sizes, setSizes }) => {
    useEffect(() => {
        getSizes().then(setSizes)
    }, [])
    return (
        <fieldset>
            <label htmlFor="sizes">Sizes</label>
            <select name="sizes" id="sizes">
                <option value="0">Choose Size</option>
                {sizes.map(s => {
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

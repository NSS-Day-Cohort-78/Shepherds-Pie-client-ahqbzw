import React, { useEffect } from "react"
import { getSizes } from "../services/SizeServices"

export const ChooseSizes = ({
    pizza,
    setPizza,

    sizes,
    setSizes
}) => {
    useEffect(() => {
        getSizes().then(setSizes)
    }, [])

    const handleChange = e => {
        const copyPizza = { ...pizza }
        copyPizza.sizeId = parseInt(e.target.value)

        setPizza(copyPizza)
    }
    return (
        <fieldset>
            <label htmlFor="sizes">Sizes</label>
            <select
                onChange={handleChange}
                name="sizes"
                value={pizza.sizeId}
                id="sizes"
            >
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

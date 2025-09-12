import React, { useEffect, useState } from "react"

export const CheckBoxes = ({ toppings, t, isChecked, setIsChecked }) => {
    const [checkedState, setCheckedState] = useState(false)

    useEffect(() => {
        setCheckedState(false)
    }, [toppings])

    const handleChange = e => {
        const copyIsChecked = [...isChecked]
        const mappedCopy = copyIsChecked.map(c => {
            if (c.id === t.id) {
                c.checked = !c.checked
                setCheckedState(c.checked)
                return c
            } else {
                return c
            }
        })

        setIsChecked(mappedCopy)
    }

    return (
        <div key={t.id}>
            <input
                onChange={handleChange}
                type="checkbox"
                name="toppingId"
                id={`topping-${t.id}`}
                value={t.id}
                checked={checkedState}
            />
            <label htmlFor={`topping-${t.id}`}>{t.name}</label>
        </div>
    )
}
